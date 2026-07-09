"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import Link from "next/link";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? "bg-[var(--color-forest)]/90 backdrop-blur-xl border-b border-[var(--color-forest-border)]"
            : "bg-transparent"
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="content-container flex items-center justify-between h-16 md:h-20 px-6 md:px-10 lg:px-16">
          {/* Logo */}
          <Link
            href="/"
            className="label-mono text-[var(--color-warm-white)] tracking-[0.15em] text-sm hover:text-[var(--color-terracotta)] transition-colors duration-300"
            aria-label="Naveen — Home"
          >
            NAVEEN
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8" role="menubar">
            {siteConfig.navigation.map((item) =>
              item.href.startsWith("#") ? (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="label-mono text-[var(--color-warm-white)]/70 hover:text-[var(--color-terracotta)] transition-colors duration-300 text-xs tracking-[0.1em] bg-transparent border-none cursor-pointer"
                  role="menuitem"
                >
                  {item.label}
                </button>
              ) : item.href.endsWith(".pdf") || item.href.startsWith("http") ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-mono text-[var(--color-warm-white)]/70 hover:text-[var(--color-terracotta)] transition-colors duration-300 text-xs tracking-[0.1em]"
                  role="menuitem"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="label-mono text-[var(--color-warm-white)]/70 hover:text-[var(--color-terracotta)] transition-colors duration-300 text-xs tracking-[0.1em]"
                  role="menuitem"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <motion.span
              className="block w-5 h-[1.5px] bg-[var(--color-warm-white)]"
              animate={isMobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-5 h-[1.5px] bg-[var(--color-warm-white)]"
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-[1.5px] bg-[var(--color-warm-white)]"
              animate={isMobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[var(--color-forest)] flex flex-col items-start justify-center px-8"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.2 },
                },
              }}
              className="flex flex-col gap-8"
            >
              {siteConfig.navigation.map((item) => (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, x: -40 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                >
                  {item.href.startsWith("#") ? (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="heading-2 text-[var(--color-warm-white)] hover:text-[var(--color-terracotta)] transition-colors duration-300 bg-transparent border-none cursor-pointer text-left"
                    >
                      {item.label}
                    </button>
                  ) : item.href.endsWith(".pdf") || item.href.startsWith("http") ? (
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="heading-2 text-[var(--color-warm-white)] hover:text-[var(--color-terracotta)] transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="heading-2 text-[var(--color-warm-white)] hover:text-[var(--color-terracotta)] transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-12 left-8 flex gap-6"
            >
              {siteConfig.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-mono text-[var(--color-warm-white)]/50 hover:text-[var(--color-terracotta)] transition-colors duration-300 text-xs"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
