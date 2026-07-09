"use client";

import { skillCategories } from "@/data/skills";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerChildren";

export function Skills() {
  return (
    <SectionWrapper id="skills" variant="dark-alt">
      <SectionLabel label="Skills & Expertise" />

      <FadeIn delay={0.1} className="mb-10 md:mb-16">
        <h2
          className="heading-1 text-[var(--color-ivory)] max-w-3xl"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          What I bring to the table.
        </h2>
      </FadeIn>

      <div style={{ marginTop: "40px" }}>
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16"
        >
          {skillCategories.map((category) => (
            <StaggerItem key={category.category}>
              <div>
                <h3 className="label-mono text-[var(--color-terracotta)] text-[0.65rem] mb-5 tracking-[0.15em]">
                  {category.category.toUpperCase()}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="label-mono text-[var(--color-warm-white)]/60 text-[0.65rem] px-3 py-1.5 bg-[var(--color-forest-border)]/20 border border-[var(--color-forest-border)]/30 rounded-md hover:border-[var(--color-terracotta)]/40 hover:text-[var(--color-warm-white)] transition-all duration-300 select-none"
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
