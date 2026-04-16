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
          title="Browse blueprints and books with faster signal density."
          description="The library keeps footprint, difficulty, compatibility, throughput, and author context visible so players can import, skip, or clone a build without guesswork."
        />
        <div
          className="card"
          style={{
            padding: "1.25rem",
            marginTop: "1.5rem",
          }}
        >
          <p className="muted" style={{ marginTop: 0 }}>
            This demo uses a static dataset, but the intent is community-first:
            searchable blueprint strings, saved blueprint books, author pages,
            remix notes, moderation, and personal library collections.
          </p>
          <BlueprintBrowser blueprints={blueprints} />
        </div>
      </div>
    </div>
  );
}
