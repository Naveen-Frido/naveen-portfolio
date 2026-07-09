"use client";

import { siteConfig } from "@/data/siteConfig";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="section-dark border-t border-[var(--color-forest-border)]"
      role="contentinfo"
    >
      <div className="content-container px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left — Logo + Copyright */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="label-mono text-[var(--color-warm-white)] tracking-[0.15em] text-sm hover:text-[var(--color-terracotta)] transition-colors duration-300"
            >
              NAVEEN
            </Link>
            <p className="label-mono text-[var(--color-warm-white)]/40 text-[0.65rem]">
              Built with Next.js · © {new Date().getFullYear()}
            </p>
          </div>

          {/* Center — Social Links */}
          <div className="flex gap-6">
            {siteConfig.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="label-mono text-[var(--color-warm-white)]/50 hover:text-[var(--color-terracotta)] transition-colors duration-300 text-[0.7rem]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right — Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 label-mono text-[var(--color-warm-white)]/50 hover:text-[var(--color-terracotta)] transition-colors duration-300 text-[0.7rem] bg-transparent border-none cursor-pointer group"
            aria-label="Back to top"
          >
            Back to Top
            <ArrowUp
              size={14}
              className="group-hover:-translate-y-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
