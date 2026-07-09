"use client";

import { Project } from "@/types";
import { getProjectBySlug } from "@/data/projects";
import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";
import { StatCard } from "@/components/ui/StatCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CaseStudyContentProps {
  project: Project;
}

export function CaseStudyContent({ project }: CaseStudyContentProps) {
  const nextProject = getProjectBySlug(project.nextProject);
  const isVisualProject = !!(project.images && project.images.length > 0);
  const isPrototypeProject = !project.problem || project.problem === "";

  return (
    <article>
      {/* ===== HERO ===== */}
      <section className="section-dark min-h-[70vh] flex flex-col justify-end relative">
        <div className="content-container px-6 md:px-10 lg:px-16 pt-32 pb-16 md:pb-24">
          {/* Back */}
          <FadeIn delay={0.2}>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 label-mono text-[var(--color-warm-white)]/50 text-[0.65rem] hover:text-[var(--color-terracotta)] transition-colors duration-300 mb-12"
            >
              <ArrowLeft size={14} />
              Back to Case Studies
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              {/* Meta */}
              <FadeIn delay={0.3}>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="label-mono text-[var(--color-terracotta)] text-[0.65rem]">
                    {project.category}
                  </span>
                  <span className="text-[var(--color-warm-white)]/20">·</span>
                  <span className="label-mono text-[var(--color-warm-white)]/40 text-[0.65rem]">
                    {project.timeline}
                  </span>
                  <span className="text-[var(--color-warm-white)]/20">·</span>
                  <span className="label-mono text-[var(--color-warm-white)]/40 text-[0.65rem]">
                    {project.role}
                  </span>
                </div>
              </FadeIn>

              {/* Title */}
              <h1
                className="heading-display text-[var(--color-ivory)]"
                style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
              >
                <TextReveal text={project.title} delay={0.4} />
              </h1>
            </div>

            <div className="lg:col-span-4">
              <FadeIn delay={0.6}>
                <p className="body-large text-[var(--color-warm-white)]/60">
                  {project.overview}
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {isVisualProject ? (
        /* ===== VISUAL GALLERY FLOW ===== */
        <section className="section-dark pb-20 pt-10">
          <div className="content-container px-6 md:px-10 lg:px-16 flex flex-col gap-12 md:gap-20">
            {project.images?.map((imgUrl, idx) => (
              <FadeIn key={idx} delay={0.1}>
                <div className="relative overflow-hidden rounded-md border border-[var(--color-forest-border)] shadow-2xl bg-[var(--color-forest-light)]">
                  <img
                    src={imgUrl}
                    alt={`${project.title} slide ${idx + 1}`}
                    className="w-full h-auto object-contain"
                    loading={idx < 2 ? "eager" : "lazy"}
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      ) : isPrototypeProject ? (
        /* ===== PROTOTYPE SHOWCASE FLOW ===== */
        <section className="section-dark pb-20 pt-10">
          {/* Cover Mockup */}
          {project.coverImage && (
            <FadeIn delay={0.1}>
              <div className="relative overflow-hidden border-b border-[var(--color-forest-border)] shadow-2xl bg-[var(--color-forest-light)] aspect-[16/10] w-full">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </FadeIn>
          )}

          {/* Embedded Interactive Prototype */}
          {project.prototype && (
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center gap-8 mt-12 md:mt-16">
                <div className="text-center px-6">
                  <SectionLabel label="Interactive Prototype" className="justify-center" />
                  <h2 className="heading-2 text-[var(--color-ivory)] max-w-xl mx-auto mt-4">
                    Experience the high-fidelity shopping flow.
                  </h2>
                  <p className="body-base text-[var(--color-warm-white)]/60 max-w-lg mx-auto mt-4">
                    Interact with product cards, checkout sheets, and custom UI components.
                  </p>
                </div>

                {/* Figma Embed Container — True Full Width */}
                <div
                  className="relative w-full overflow-hidden border-y border-[var(--color-forest-border)] shadow-2xl bg-[#1a1a1a]"
                  style={{ height: "85vh" }}
                >
                  {/* Subtle top bar to frame the embed */}
                  <div className="absolute top-0 left-0 right-0 z-10 h-10 bg-[#1a1a1a] border-b border-[var(--color-forest-border)] flex items-center px-4 gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-warm-white)]/10" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-warm-white)]/10" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-warm-white)]/10" />
                    <span className="label-mono text-[var(--color-warm-white)]/25 text-[0.55rem] ml-3 tracking-wider">
                      LIVE PROTOTYPE
                    </span>
                  </div>
                  <iframe
                    src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(project.prototype)}`}
                    className="w-full border-0"
                    style={{ marginTop: "40px", height: "calc(100% - 40px)" }}
                    allowFullScreen
                    loading="lazy"
                    title={`${project.title} – Interactive Prototype`}
                  />
                </div>

                {/* Helper hint */}
                <p className="label-mono text-[var(--color-warm-white)]/30 text-[0.6rem] tracking-widest text-center">
                  Click and scroll inside the frame to navigate the prototype
                </p>
              </div>
            </FadeIn>
          )}
        </section>
      ) : (
        /* ===== STANDARD TEXT-BASED CASE STUDY ===== */
        <>
      {/* ===== COVER IMAGE ===== */}
      <section className="section-dark">
        <div className="content-container px-6 md:px-10 lg:px-16">
          <FadeIn>
            <div className="aspect-[16/8] bg-[var(--color-forest-light)] rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-forest-light)] to-[var(--color-forest)]">
                <div className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-[var(--color-ivory)]/[0.03]" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="heading-display text-[var(--color-warm-white)]/[0.03] select-none" style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}>
                    {project.title}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="section-dark section-padding">
        <div className="content-container px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionLabel label="The Problem" />
              <FadeIn>
                <h2 className="heading-2 text-[var(--color-ivory)]">
                  What needed solving.
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-8">
              <FadeIn delay={0.2}>
                <p className="body-large text-[var(--color-warm-white)]/60 leading-relaxed">
                  {project.problem}
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BUSINESS CONTEXT ===== */}
      <section className="section-dark-alt section-padding">
        <div className="content-container px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionLabel label="Business Context" />
              <FadeIn>
                <h2 className="heading-2 text-[var(--color-ivory)]">
                  Why it mattered.
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-8">
              <FadeIn delay={0.2}>
                <p className="body-large text-[var(--color-warm-white)]/60 leading-relaxed">
                  {project.businessContext}
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESEARCH ===== */}
      <section className="section-dark section-padding">
        <div className="content-container px-6 md:px-10 lg:px-16">
          <SectionLabel label="Research" />
          <FadeIn>
            <h2 className="heading-2 text-[var(--color-ivory)] mb-12 md:mb-16 max-w-2xl">
              How I built understanding.
            </h2>
          </FadeIn>

          <StaggerContainer staggerDelay={0.08} className="max-w-3xl">
            {project.research.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-4 py-4 border-b border-[var(--color-forest-border)] last:border-b-0">
                  <span className="label-mono text-[var(--color-terracotta)] text-[0.65rem] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="body-base text-[var(--color-warm-white)]/60">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== INSIGHTS ===== */}
      <section className="section-light section-padding">
        <div className="content-container px-6 md:px-10 lg:px-16">
          <SectionLabel label="Key Insights" variant="light" />
          <FadeIn>
            <h2
              className="heading-1 text-[var(--color-dark-text)] mb-12 md:mb-16 max-w-3xl"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              What the research revealed.
            </h2>
          </FadeIn>

          <StaggerContainer
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {project.insights.map((insight, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-4 items-start">
                  <span className="text-[var(--color-terracotta)] text-lg mt-0.5">
                    —
                  </span>
                  <p className="body-base text-[var(--color-dark-text)]/70">
                    {insight}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== GOALS & CONSTRAINTS ===== */}
      <section className="section-dark section-padding">
        <div className="content-container px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Goals */}
            <div>
              <SectionLabel label="Goals" />
              <FadeIn>
                <h2 className="heading-2 text-[var(--color-ivory)] mb-8">
                  What we aimed for.
                </h2>
              </FadeIn>
              <StaggerContainer staggerDelay={0.08}>
                {project.goals.map((goal, i) => (
                  <StaggerItem key={i}>
                    <div className="flex gap-4 py-3 border-b border-[var(--color-forest-border)] last:border-b-0">
                      <span className="text-[var(--color-terracotta)]">—</span>
                      <p className="body-base text-[var(--color-warm-white)]/60">
                        {goal}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Constraints */}
            <div>
              <SectionLabel label="Constraints" />
              <FadeIn>
                <h2 className="heading-2 text-[var(--color-ivory)] mb-8">
                  What shaped the solution.
                </h2>
              </FadeIn>
              <StaggerContainer staggerDelay={0.08}>
                {project.constraints.map((constraint, i) => (
                  <StaggerItem key={i}>
                    <div className="flex gap-4 py-3 border-b border-[var(--color-forest-border)] last:border-b-0">
                      <span className="text-[var(--color-warm-white)]/30">—</span>
                      <p className="body-base text-[var(--color-warm-white)]/50">
                        {constraint}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AI INTEGRATION ===== */}
      {project.aiIntegration && (
        <section className="section-dark-alt section-padding">
          <div className="content-container px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4">
                <SectionLabel label="AI Integration" />
                <FadeIn>
                  <h2 className="heading-2 text-[var(--color-ivory)]">
                    How AI was woven into the experience.
                  </h2>
                </FadeIn>
              </div>
              <div className="lg:col-span-8">
                <FadeIn delay={0.2}>
                  <p className="body-large text-[var(--color-warm-white)]/60 leading-relaxed">
                    {project.aiIntegration}
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== CHALLENGES ===== */}
      <section className="section-dark section-padding">
        <div className="content-container px-6 md:px-10 lg:px-16">
          <SectionLabel label="Challenges" />
          <FadeIn>
            <h2 className="heading-2 text-[var(--color-ivory)] mb-12 md:mb-16 max-w-2xl">
              What made it hard.
            </h2>
          </FadeIn>

          <StaggerContainer
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {project.challenges.map((challenge, i) => (
              <StaggerItem key={i}>
                <div className="border border-[var(--color-forest-border)] rounded-sm p-6 md:p-8">
                  <span className="label-mono text-[var(--color-terracotta)] text-[0.65rem] block mb-3">
                    CHALLENGE {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="body-base text-[var(--color-warm-white)]/60">
                    {challenge}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== OUTCOME & IMPACT ===== */}
      <section className="section-light section-padding">
        <div className="content-container px-6 md:px-10 lg:px-16">
          <SectionLabel label="Outcome" variant="light" />
          <FadeIn>
            <h2
              className="heading-1 text-[var(--color-dark-text)] mb-10 max-w-3xl"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              The results.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="body-large text-[var(--color-dark-text)]/70 mb-16 md:mb-20 max-w-3xl">
              {project.outcome}
            </p>
          </FadeIn>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {project.businessImpact.map((metric, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.1}>
                <div className="flex flex-col gap-2">
                  <span
                    className="font-display font-800 leading-none text-[var(--color-terracotta)]"
                    style={{
                      fontSize: "clamp(2.5rem, 5vw, 4rem)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {metric.value}
                  </span>
                  <span className="label-mono text-[var(--color-dark-text)]/70 text-[0.65rem]">
                    {metric.label}
                  </span>
                  <p className="body-base text-[var(--color-dark-text)]/50 text-sm">
                    {metric.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REFLECTION ===== */}
      <section className="section-dark section-padding">
        <div className="content-container px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel label="Reflection" />
              <FadeIn>
                <h2 className="heading-2 text-[var(--color-ivory)] mb-8">
                  What I learned.
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="body-large text-[var(--color-warm-white)]/60 leading-relaxed">
                  {project.reflection}
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <SectionLabel label="Key Learnings" />
              <StaggerContainer staggerDelay={0.1}>
                {project.keyLearnings.map((learning, i) => (
                  <StaggerItem key={i}>
                    <div className="flex gap-4 py-4 border-b border-[var(--color-forest-border)] last:border-b-0">
                      <span className="label-mono text-[var(--color-terracotta)] text-[0.65rem] shrink-0 mt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="body-base text-[var(--color-warm-white)]/60">
                        {learning}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>
        </>
      )}

      {/* ===== NEXT PROJECT ===== */}
      {nextProject && (
        <section className="section-dark-alt section-padding">
          <div className="content-container px-6 md:px-10 lg:px-16">
            <FadeIn>
              <Link
                href={`/work/${nextProject.slug}`}
                className="group block"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                  <div>
                    <span className="label-mono text-[var(--color-warm-white)]/40 text-[0.65rem] block mb-4">
                      NEXT PROJECT
                    </span>
                    <h3 className="heading-1 text-[var(--color-ivory)] group-hover:text-[var(--color-terracotta)] transition-colors duration-500">
                      {nextProject.title}
                    </h3>
                    <p className="label-mono text-[var(--color-warm-white)]/40 text-[0.65rem] mt-3">
                      {nextProject.category} · {nextProject.timeline}
                    </p>
                  </div>
                  <ArrowRight
                    size={32}
                    className="text-[var(--color-warm-white)]/30 group-hover:text-[var(--color-terracotta)] group-hover:translate-x-2 transition-all duration-500"
                  />
                </div>
              </Link>
            </FadeIn>
          </div>
        </section>
      )}
    </article>
  );
}
