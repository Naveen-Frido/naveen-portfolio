"use client";

import { aboutContent } from "@/data/about";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";

export function About() {
  return (
    <SectionWrapper id="about" variant="light">
      <SectionLabel label="About" variant="light" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column — Portrait + Pull Quote */}
        <div className="lg:col-span-5">
          {/* Portrait Image */}
          <FadeIn delay={0.1}>
            <div className="aspect-[3/4] bg-[var(--color-forest)] rounded-sm mb-10 relative overflow-hidden">
              {/* Abstract geometric background patterns */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[var(--color-forest-light)]" />
              <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-[var(--color-terracotta)]/10" />

              {/* Centered Photo Frame */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[65%] h-[75%] relative overflow-hidden rounded-sm shadow-2xl border border-[var(--color-forest-light)]/20">
                  <img
                    src="/Naveen.jpeg"
                    alt="Naveen"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Pull Quote */}
          <FadeIn delay={0.3}>
            <blockquote className="relative">
              <div className="absolute -top-4 -left-2 text-[var(--color-terracotta)]/30 text-6xl font-display leading-none select-none" style={{ fontFamily: 'var(--font-display)' }}>
                &ldquo;
              </div>
              <p
                className="heading-3 text-[var(--color-dark-text)] pl-6 leading-snug"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
              >
                {aboutContent.pullQuote}
              </p>
            </blockquote>
          </FadeIn>
        </div>

        {/* Right Column — Text Content */}
        <div className="lg:col-span-7">
          <FadeIn delay={0.1} className="mb-10">
            <h2
              className="heading-1 text-[var(--color-dark-text)]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              <TextReveal text={aboutContent.headline} />
            </h2>
          </FadeIn>

          {aboutContent.intro && (
            <FadeIn delay={0.2}>
              <p className="body-large text-[var(--color-dark-text)]/70" style={{ marginBottom: "40px" }}>
                {aboutContent.intro}
              </p>
            </FadeIn>
          )}

          {/* Sections */}
          <div className="flex flex-col gap-10" style={{ marginTop: "40px" }}>
            <FadeIn delay={0.3}>
              <div>
                <h3 className="label-mono text-[var(--color-terracotta)] text-[0.65rem] mb-4 tracking-[0.15em]">
                  MY JOURNEY
                </h3>
                <p className="body-base text-[var(--color-dark-text)]/60 leading-relaxed whitespace-pre-line">
                  {aboutContent.journey}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div>
                <h3 className="label-mono text-[var(--color-terracotta)] text-[0.65rem] mb-4 tracking-[0.15em]">
                  DESIGN PHILOSOPHY
                </h3>
                <p className="body-base text-[var(--color-dark-text)]/60 leading-relaxed whitespace-pre-line">
                  {aboutContent.designPhilosophy}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div>
                <h3 className="label-mono text-[var(--color-terracotta)] text-[0.65rem] mb-4 tracking-[0.15em]">
                  HOW I WORK
                </h3>
                <p className="body-base text-[var(--color-dark-text)]/60 leading-relaxed whitespace-pre-line">
                  {aboutContent.workingStyle}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div>
                <h3 className="label-mono text-[var(--color-terracotta)] text-[0.65rem] mb-4 tracking-[0.15em]">
                  WHY AI
                </h3>
                <p className="body-base text-[var(--color-dark-text)]/60 leading-relaxed whitespace-pre-line">
                  {aboutContent.whyAI}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
