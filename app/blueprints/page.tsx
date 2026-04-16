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
          description="Filter by footprint, difficulty, compatibility, throughput, and author context. Import, skip, or clone without guesswork."
        />
        <BlueprintBrowser blueprints={blueprints} />
      </div>
    </div>
  );
}
