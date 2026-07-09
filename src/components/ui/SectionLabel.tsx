interface SectionLabelProps {
  label: string;
  number?: string;
  variant?: "dark" | "light";
  className?: string;
}

export function SectionLabel({
  label,
  number,
  variant = "dark",
  className = "",
}: SectionLabelProps) {
  const textColor =
    variant === "dark"
      ? "text-[var(--color-warm-white)]/50"
      : "text-[var(--color-dark-text)]/50";

  return (
    <div className={`flex items-center gap-4 mb-12 md:mb-16 ${className}`}>
      {number && (
        <span className={`label-mono ${textColor} text-[0.65rem]`}>{number}</span>
      )}
      <span className={`label-mono ${textColor} text-[0.65rem] tracking-[0.15em]`}>
        {label}
      </span>
    </div>
  );
}
