"use client";

import { motion, type Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  once = true,
}: TextRevealProps) {
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      className={className}
      style={{ display: "inline" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          style={{ display: "inline-block", marginRight: "0.3em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

interface LineRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function LineReveal({
  children,
  delay = 0,
  className = "",
  once = true,
}: LineRevealProps) {
  return (
    <div style={{ overflow: "hidden" }} className={className}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once, margin: "-50px" }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
