type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div style={{ display: "grid", gap: "0.9rem", marginBottom: "1.75rem" }}>
      <span className="eyebrow">{eyebrow}</span>
      <div style={{ display: "grid", gap: "0.65rem", maxWidth: "44rem" }}>
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(1.9rem, 3vw, 3rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          {title}
        </h2>
        <p
          className="muted"
          style={{
            margin: 0,
            fontSize: "1.02rem",
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
