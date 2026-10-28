import { SectionStub } from "@/components/ui/section-stub";

/**
 * Stub — full About UI lands in Slice 7.
 * Keeps #about + heading so nav and composition contract work now.
 */
export function About() {
  return (
    <SectionStub
      id="about"
      eyebrow="About"
      title="Mobile craft, full-stack range"
      description="Narrative and background will live here — placeholder until the About section is filled in."
    />
  );
}
