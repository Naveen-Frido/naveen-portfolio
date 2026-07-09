import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  variant?: "dark" | "dark-alt" | "light";
  className?: string;
  noPadding?: boolean;
}

export function SectionWrapper({
  children,
  id,
  variant = "dark",
  className = "",
  noPadding = false,
}: SectionWrapperProps) {
  const variantClasses = {
    dark: "section-dark",
    "dark-alt": "section-dark-alt",
    light: "section-light",
  };

  return (
    <section
      id={id}
      className={`${variantClasses[variant]} ${
        noPadding ? "" : "section-padding"
      } ${className}`}
    >
      <div className="content-container px-6 md:px-10 lg:px-16">
        {children}
      </div>
    </section>
  );
}
