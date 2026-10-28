"use client";

import { useEffect, useId, useRef, useState } from "react";
import { NAV_LINKS } from "@/components/layout/nav-links";

/**
 * Hamburger + drawer for small viewports.
 * Closes on Escape, link activation, or outside click; restores focus to the menu button.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function onNavActivate() {
    setOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm transition-colors hover:border-accent/30 hover:bg-accent-soft"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => {
          setOpen((prev) => {
            const next = !prev;
            if (!next) {
              queueMicrotask(() => buttonRef.current?.focus());
            }
            return next;
          });
        }}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? <CloseIcon aria-hidden /> : <MenuIcon aria-hidden />}
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-foreground/10 backdrop-blur-[2px]"
            aria-label="Close menu overlay"
            onClick={() => {
              setOpen(false);
              buttonRef.current?.focus();
            }}
          />
          <nav
            id={panelId}
            aria-label="Mobile"
            className="absolute left-0 right-0 top-[var(--header-height)] z-50 border-b border-border bg-white shadow-[var(--shadow-soft)]"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent-soft hover:text-accent"
                    onClick={onNavActivate}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      ) : null}
    </div>
  );
}

function MenuIcon({ "aria-hidden": ariaHidden }: { "aria-hidden"?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden={ariaHidden}
    >
      <path
        d="M3 5h14M3 10h14M3 15h14"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon({ "aria-hidden": ariaHidden }: { "aria-hidden"?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden={ariaHidden}
    >
      <path
        d="M5 5l10 10M15 5L5 15"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}
