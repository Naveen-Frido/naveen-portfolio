"use client";

import { useState, useRef } from "react";
import { siteConfig } from "@/data/siteConfig";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";
import { Mail, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      emailjs.init("X3YpS-gNehcIZImi5");
      await emailjs.send(
        "service_1g1xd04",
        "template_f9r5957",
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        }
      );

      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err: unknown) {
      console.error("EmailJS Error:", err);
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(`Failed to send: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" variant="light">
      <SectionLabel label="Contact" variant="light" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
        {/* Left Column — Headline + Links */}
        <div className="lg:col-span-6">
          <h2
            className="heading-1 text-[var(--color-dark-text)] mb-8"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            <TextReveal text="Let's build something meaningful." />
          </h2>

          <FadeIn delay={0.3} className="mb-8">
            <p className="body-large text-[var(--color-dark-text)]/60 max-w-lg">
              I&apos;m always interested in hearing about new projects,
              especially those involving AI product design. Let&apos;s talk.
            </p>
          </FadeIn>

          {/* Contact Links */}
          <FadeIn delay={0.4}>
            <div className="flex flex-col gap-5" style={{ marginTop: "24px" }}>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 text-[var(--color-dark-text)]/70 hover:text-[var(--color-terracotta)] transition-colors duration-300 group"
              >
                <Mail
                  size={18}
                  className="text-[var(--color-terracotta)]/60 group-hover:text-[var(--color-terracotta)] transition-colors duration-300"
                />
                <span className="body-base">{siteConfig.email}</span>
              </a>

              {siteConfig.socialLinks
                .filter((link) => link.label !== "Email")
                .map((link) => {
                  const Icon =
                    link.icon === "mail"
                      ? Mail
                      : ExternalLink;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-[var(--color-dark-text)]/70 hover:text-[var(--color-terracotta)] transition-colors duration-300 group"
                    >
                      <Icon
                        size={18}
                        className="text-[var(--color-terracotta)]/60 group-hover:text-[var(--color-terracotta)] transition-colors duration-300"
                      />
                      <span className="body-base">{link.label}</span>
                    </a>
                  );
                })}

              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[var(--color-dark-text)]/70 hover:text-[var(--color-terracotta)] transition-colors duration-300 group mt-2"
              >
                <FileText
                  size={18}
                  className="text-[var(--color-terracotta)]/60 group-hover:text-[var(--color-terracotta)] transition-colors duration-300"
                />
                <span className="body-base">View Resume</span>
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right Column — Contact Form */}
        <div className="lg:col-span-6">
          <FadeIn delay={0.3}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="label-mono text-[var(--color-dark-text)]/50 text-[0.65rem] tracking-[0.1em]"
                >
                  NAME
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="bg-transparent border-b border-[var(--color-dark-text)]/15 py-3 body-base text-[var(--color-dark-text)] focus:border-[var(--color-terracotta)] transition-colors duration-300 outline-none"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="label-mono text-[var(--color-dark-text)]/50 text-[0.65rem] tracking-[0.1em]"
                >
                  EMAIL
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="bg-transparent border-b border-[var(--color-dark-text)]/15 py-3 body-base text-[var(--color-dark-text)] focus:border-[var(--color-terracotta)] transition-colors duration-300 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="label-mono text-[var(--color-dark-text)]/50 text-[0.65rem] tracking-[0.1em]"
                >
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="bg-transparent border-b border-[var(--color-dark-text)]/15 py-3 body-base text-[var(--color-dark-text)] focus:border-[var(--color-terracotta)] transition-colors duration-300 outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="self-start inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-terracotta)] text-[var(--color-warm-white)] rounded-full label-mono text-xs tracking-[0.08em] hover:bg-[var(--color-terracotta-hover)] transition-all duration-300 cursor-pointer border-none mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <p className="body-base text-[var(--color-terracotta)] text-sm mt-2">
                  Thank you! I&apos;ll get back to you soon.
                </p>
              )}

              {/* Error Message */}
              {error && (
                <p className="body-base text-red-600 text-sm mt-2">
                  {error}
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}
