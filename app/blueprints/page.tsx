import { BlueprintBrowser } from "@/components/blueprint-browser";
import { SectionHeading } from "@/components/section-heading";
import { blueprints } from "@/data/site";

export const metadata = {
  title: "Blueprint library | Factorio Forge",
};

export default function BlueprintsPage() {
  return (
    <div className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Blueprint library"
          title="Browse blueprints with faster signal density."
          description="The rebuilt discovery layer surfaces quality indicators before click-through: footprint, difficulty, compatibility, throughput, and trust cues stay visible at all times."
        />
        <div
          className="card"
          style={{
            padding: "1.25rem",
            marginTop: "1.5rem",
          }}
        >
          <p className="muted" style={{ marginTop: 0 }}>
            This demo uses a curated static dataset to represent the upgraded UX.
            In production, these cards would be backed by searchable persistence,
            author pages, import telemetry, moderation, and saved collections.
          </p>
          <BlueprintBrowser blueprints={blueprints} />
        </div>
      </div>
    </div>
  );
}
