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
    <div style={{ display: "grid", gap: "0.6rem", marginBottom: "1.25rem" }}>
      <span className="eyebrow">{eyebrow}</span>
      <div style={{ display: "grid", gap: "0.4rem", maxWidth: "44rem" }}>
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h2>
        <p
          className="muted"
          style={{
            margin: 0,
            fontSize: "0.9rem",
            lineHeight: 1.6,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
