"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/experience";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/animations/FadeIn";
import { ChevronDown } from "lucide-react";

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <SectionWrapper id="experience" variant="dark-alt">
      <SectionLabel label="Experience" />

      <div className="max-w-4xl">
        <FadeIn delay={0.1}>
          <h2 className="heading-1 text-[var(--color-ivory)] mb-16 md:mb-20">
            Where I&apos;ve worked.
          </h2>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line-custom" />

          <div className="flex flex-col gap-0">
            {experiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id;

              return (
                <FadeIn key={exp.id} delay={0.1 + index * 0.1}>
                  <div
                    className="experience-item"
                    style={isExpanded ? { paddingBottom: "48px" } : undefined}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`timeline-dot-custom transition-colors duration-300 ${
                        isExpanded
                          ? "bg-[var(--color-terracotta)]"
                          : "bg-[var(--color-warm-white)]/30"
                      }`}
                    />

                    {/* Card */}
                    <button
                      onClick={() =>
                        setExpandedId(isExpanded ? null : exp.id)
                      }
                      className="w-full text-left bg-transparent border-none cursor-pointer py-8 group"
                      aria-expanded={isExpanded}
                    >
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="heading-3 text-[var(--color-ivory)] group-hover:text-[var(--color-terracotta)] transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <p className="body-base text-[var(--color-warm-white)]/60 mt-3">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="label-mono text-[var(--color-warm-white)]/40 text-[0.65rem]">
                            {exp.startDate} — {exp.endDate}
                          </span>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown
                              size={16}
                              className="text-[var(--color-warm-white)]/40"
                            />
                          </motion.div>
                        </div>
                      </div>

                      <p className="label-mono text-[var(--color-warm-white)]/30 text-[0.6rem]">
                        {exp.location} · {exp.duration}
                      </p>
                    </button>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.3 },
                          }}
                          className="overflow-hidden pb-12"
                        >
                          <div className="pt-4">
                            <p
                              className="body-base text-[var(--color-warm-white)]/60 max-w-2xl"
                              style={{ marginBottom: "28px" }}
                            >
                              {exp.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                              {/* Achievements */}
                              <div>
                                <h4 className="label-mono text-[var(--color-terracotta)] text-[0.65rem] mb-4">
                                  KEY ACHIEVEMENTS
                                </h4>
                                <ul className="flex flex-col gap-2.5">
                                  {exp.achievements.map((achievement, i) => (
                                    <li
                                      key={i}
                                      className="body-base text-[var(--color-warm-white)]/50 text-sm accent-dash"
                                    >
                                      {achievement}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Impact */}
                              <div>
                                <h4 className="label-mono text-[var(--color-terracotta)] text-[0.65rem] mb-4">
                                  IMPACT
                                </h4>
                                <ul className="flex flex-col gap-2.5">
                                  {exp.impact.map((item, i) => (
                                    <li
                                      key={i}
                                      className="body-base text-[var(--color-warm-white)]/50 text-sm accent-dash"
                                    >
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Technologies */}
                            <div style={{ marginTop: "28px" }}>
                              <h4 className="label-mono text-[var(--color-warm-white)]/30 text-[0.6rem] mb-3">
                                TECHNOLOGIES & TOOLS
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="label-mono text-[var(--color-warm-white)]/40 text-[0.55rem] px-3 py-1 border border-[var(--color-forest-border)] rounded-full"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
