"use client";

import { Metric } from "@/types";
import { FadeIn } from "@/components/animations/FadeIn";

interface StatCardProps {
  metric: Metric;
  delay?: number;
}

export function StatCard({ metric, delay = 0 }: StatCardProps) {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="flex flex-col gap-2">
        <span
          className="font-display text-[clamp(2.5rem,5vw,4rem)] font-800 leading-none text-[var(--color-terracotta)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {metric.value}
        </span>
        <span className="label-mono text-[var(--color-warm-white)]/70 text-[0.65rem]">
          {metric.label}
        </span>
        <p className="body-base text-[var(--color-warm-white)]/50 text-sm max-w-[250px]">
          {metric.description}
        </p>
      </div>
    </FadeIn>
  );
}
