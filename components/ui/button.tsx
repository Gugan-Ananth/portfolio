import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground shadow-[0_8px_24px_rgb(63_163_107_/_0.28)] hover:bg-accent-hover hover:shadow-[0_10px_28px_rgb(63_163_107_/_0.35)] active:bg-accent-active active:shadow-none",
  secondary:
    "border border-border-strong bg-white text-foreground shadow-sm hover:border-accent/40 hover:bg-accent-soft/60 hover:text-accent-hover",
  ghost:
    "text-accent hover:bg-accent-soft hover:text-accent-hover",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 disabled:pointer-events-none disabled:opacity-50";

type CommonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function classes(variant: ButtonVariant, className: string) {
  return `${baseClasses} ${variantClasses[variant]} ${className}`.trim();
}

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const className = props.className ?? "";

  if ("href" in props && props.href) {
    const { href, children, external } = props;
    if (external) {
      return (
        <a
          href={href}
          className={classes(variant, className)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    if (href.startsWith("#")) {
      return (
        <a href={href} className={classes(variant, className)}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes(variant, className)}>
        {children}
      </Link>
    );
  }

  const { children, type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} className={classes(variant, className)} {...rest}>
      {children}
    </button>
  );
}
