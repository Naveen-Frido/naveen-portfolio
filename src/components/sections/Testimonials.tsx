"use client";

import { testimonials } from "@/data/testimonials";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerChildren";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <SectionWrapper id="testimonials" variant="dark">
      <SectionLabel label="Testimonials" />

      <FadeIn delay={0.1}>
        <h2
          className="heading-1 text-[var(--color-ivory)] mb-16 md:mb-20 max-w-3xl"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          What people say.
        </h2>
      </FadeIn>

      <StaggerContainer
        staggerDelay={0.15}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
      >
        {testimonials.map((testimonial, index) => (
          <StaggerItem key={index}>
            <div
              className={`border border-[var(--color-forest-border)] rounded-sm p-8 md:p-10 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
              style={index === 0 ? { gridColumn: "1 / -1" } : undefined}
            >
              {/* Quote Mark */}
              <div
                className="text-[var(--color-terracotta)]/30 text-5xl font-display leading-none mb-6 select-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &ldquo;
              </div>

              {/* Quote */}
              <p
                className={`text-[var(--color-ivory)] leading-relaxed mb-8 ${
                  index === 0
                    ? "heading-3"
                    : "body-large"
                }`}
                style={
                  index === 0
                    ? { fontSize: "clamp(1.25rem, 2vw, 1.75rem)", fontWeight: 400, fontFamily: "var(--font-body)" }
                    : undefined
                }
              >
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex flex-col gap-1">
                <span className="body-base text-[var(--color-warm-white)]/80 font-medium text-sm">
                  {testimonial.author}
                </span>
                <span className="label-mono text-[var(--color-warm-white)]/40 text-[0.6rem]">
                  {testimonial.title} · {testimonial.company}
                </span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
