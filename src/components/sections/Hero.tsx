"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center section-dark"
    >
      <div className="content-container px-6 md:px-10 lg:px-16 pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column — Main Typography */}
          <div className="lg:col-span-8">
            {/* Greeting */}
            <FadeIn delay={0.2} direction="up">
              <p className="label-mono text-[var(--color-warm-white)]/50 tracking-[0.15em] text-xs mb-6">
                PRODUCT DESIGNER · AI · UX
              </p>
            </FadeIn>

            {/* Main Headline */}
            <h1
              className="heading-display text-[var(--color-ivory)] mb-8"
              style={{
                fontSize: "clamp(3rem, 8vw, 7.5rem)",
              }}
            >
              <TextReveal text="Hi, I'm" delay={0.4} />
              <br />
              <TextReveal text="Naveen Rajendran-" delay={0.6} />
            </h1>

            {/* Subheadline */}
            <FadeIn delay={1} direction="up">
              <p
                className="body-large text-[var(--color-warm-white)]/70 max-w-2xl"
                style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", lineHeight: 1.6, marginTop: "24px" }}
              >
                I design AI-powered products that simplify complex workflows
                and create delightful user experiences.
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={1.3} direction="up">
              <div className="flex flex-wrap items-center gap-4 mt-10">
                <button
                  onClick={() => {
                    const el = document.querySelector("#work");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-terracotta)] text-[var(--color-warm-white)] rounded-full label-mono text-xs tracking-[0.08em] hover:bg-[var(--color-terracotta-hover)] transition-all duration-300 cursor-pointer border-none hover:shadow-lg hover:shadow-[var(--color-terracotta)]/20"
                >
                  View Work
                </button>
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-[var(--color-warm-white)]/20 text-[var(--color-warm-white)]/70 rounded-full label-mono text-xs tracking-[0.08em] hover:border-[var(--color-terracotta)] hover:text-[var(--color-terracotta)] transition-all duration-300"
                >
                  View Resume
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column — Stats Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <FadeIn delay={1.5} direction="up" className="w-full max-w-sm">
              <div
                className="bg-[var(--color-ivory)] rounded-sm shadow-2xl flex flex-col gap-6 w-full border border-[var(--color-dark-text)]/25 relative"
                style={{ padding: "36px" }}
              >
                {/* Inner inset border frame */}
                <div
                  className="absolute border border-[var(--color-dark-text)]/15 rounded-[1px] pointer-events-none"
                  style={{ top: "12px", bottom: "12px", left: "12px", right: "12px" }}
                />
                {[
                  { label: "3+ Years", sublabel: "Product Design" },
                  { label: "AI Designer", sublabel: "Specialization" },
                  { label: "12,000+", sublabel: "Users Impacted" },
                  { label: "Bangalore", sublabel: "India" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-1.5 border-b border-[var(--color-dark-text)]/10 pb-5 last:border-0 last:pb-0"
                  >
                    <span
                      className="text-[var(--color-dark-text)] font-display font-700 text-2xl md:text-3xl leading-none"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {stat.label}
                    </span>
                    <span className="label-mono text-[var(--color-dark-text)]/50 text-[0.65rem] tracking-[0.12em] uppercase leading-none">
                      {stat.sublabel}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="label-mono text-[var(--color-warm-white)]/30 text-[0.6rem]">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-[var(--color-warm-white)]/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
