"use client";

import { projects } from "@/data/projects";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SelectedWork() {
  return (
    <SectionWrapper id="work" variant="dark">
      <SectionLabel label="Case Study" />

      <div className="flex flex-col gap-24 md:gap-32 lg:gap-40">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={0.1} direction="up">
            {(() => {
              const isComingSoon = project.comingSoon;
              const Wrapper = isComingSoon ? "div" : Link;
              const wrapperProps = isComingSoon
                ? { className: "group block cursor-not-allowed" }
                : { href: `/work/${project.slug}`, className: "group block" };

              return (
                // @ts-expect-error — dynamic wrapper
                <Wrapper {...wrapperProps}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Image Area */}
                  <div
                    className={`${
                      index % 2 === 0
                        ? "lg:col-span-7"
                        : "lg:col-span-7 lg:order-2"
                    } relative overflow-hidden rounded-sm`}
                  >
                    <motion.div
                      className={`aspect-[16/10] bg-[var(--color-forest-light)] relative overflow-hidden ${
                        isComingSoon ? "grayscale-[40%] opacity-70" : ""
                      }`}
                      whileHover={isComingSoon ? {} : { scale: 1.02 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {project.coverImage ? (
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className={`w-full h-full object-cover transition-transform duration-700 ${
                            isComingSoon ? "" : "group-hover:scale-105"
                          }`}
                        />
                      ) : (
                        /* Placeholder Cover — elegant geometric pattern */
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-full bg-gradient-to-br from-[var(--color-forest-light)] to-[var(--color-forest)] relative">
                            {/* Geometric accent */}
                            <div
                              className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[var(--color-ivory)]/5"
                              style={{
                                clipPath:
                                  index % 2 === 0
                                    ? "polygon(100% 0, 100% 100%, 0 100%)"
                                    : "polygon(0 0, 100% 0, 100% 100%)",
                              }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span
                                className="heading-display text-[var(--color-warm-white)]/[0.03] select-none"
                                style={{
                                  fontSize: "clamp(4rem, 10vw, 10rem)",
                                }}
                              >
                                {String(index + 1).padStart(2, "0")}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Hover Overlay / Coming Soon Badge */}
                      {isComingSoon ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="label-mono text-[var(--color-warm-white)] text-xs bg-[var(--color-forest)]/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-[var(--color-forest-border)] tracking-[0.15em]">
                            Launching Soon
                          </span>
                        </div>
                      ) : (
                        <div className="absolute inset-0 bg-[var(--color-terracotta)]/0 group-hover:bg-[var(--color-terracotta)]/10 transition-colors duration-500 flex items-center justify-center">
                          <motion.div
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2 label-mono text-[var(--color-warm-white)] text-xs"
                            initial={false}
                          >
                            View Case Study
                            <ArrowUpRight size={14} />
                          </motion.div>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <div
                    className={`${
                      index % 2 === 0
                        ? "lg:col-span-5"
                        : "lg:col-span-5 lg:order-1"
                    } flex flex-col justify-center gap-5`}
                  >
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="label-mono text-[var(--color-terracotta)] text-[0.65rem]">
                        {project.category}
                      </span>
                      <span className="text-[var(--color-warm-white)]/20">·</span>
                      <span className="label-mono text-[var(--color-warm-white)]/40 text-[0.65rem]">
                        {project.timeline}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={`heading-2 text-[var(--color-ivory)] ${
                      isComingSoon ? "" : "group-hover:text-[var(--color-terracotta)]"
                    } transition-colors duration-500`}>
                      {project.title}
                    </h3>

                    {/* Overview */}
                    <p className="body-base text-[var(--color-warm-white)]/60 text-[0.95rem] leading-relaxed">
                      {project.overview}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="label-mono text-[var(--color-warm-white)]/40 text-[0.55rem] px-3 py-1.5 border border-[var(--color-forest-border)] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Role */}
                    <p className="label-mono text-[var(--color-warm-white)]/30 text-[0.6rem] mt-2">
                      {project.role}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                {index < projects.length - 1 && (
                  <div className="divider-dark mt-24 md:mt-32 lg:mt-40" />
                )}
              </Wrapper>
              );
            })()}
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
