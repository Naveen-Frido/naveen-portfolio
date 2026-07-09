"use client";

import { designProcess } from "@/data/process";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerChildren";

export function DesignProcess() {
  return (
    <SectionWrapper id="process" variant="dark">
      <SectionLabel label="Design Process" />

      <FadeIn delay={0.1} className="mb-10 md:mb-16">
        <h2
          className="heading-1 text-[var(--color-ivory)] max-w-3xl"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          A systematic approach to solving complex problems.
        </h2>
      </FadeIn>

      <div style={{ marginTop: "48px" }}>
        <StaggerContainer staggerDelay={0.12} className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[2.5rem] md:left-[3.5rem] top-0 bottom-0 w-px bg-[var(--color-forest-border)] hidden md:block" />

          <div className="grid grid-cols-1 gap-0">
            {designProcess.map((step, index) => (
              <StaggerItem key={step.number}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-10 md:py-14 border-b border-[var(--color-forest-border)] last:border-b-0 group">
                  {/* Number */}
                  <div className="md:col-span-2 flex items-center gap-4">
                    <span
                      className="heading-display text-[var(--color-terracotta)]/80 select-none"
                      style={{
                        fontSize: "clamp(2rem, 3vw, 3rem)",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-4">
                    <h3
                      className="heading-2 text-[var(--color-ivory)] group-hover:text-[var(--color-terracotta)] transition-colors duration-500"
                      style={{
                        fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-6">
                    <p className="body-base text-[var(--color-warm-white)]/50 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow connector (between steps) */}
                {index < designProcess.length - 1 && (
                  <div className="hidden md:flex justify-start pl-[2.35rem] -mt-3 -mb-3">
                    <div className="w-px h-6 bg-[var(--color-terracotta)]/20" />
                  </div>
                )}
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
