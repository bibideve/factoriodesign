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
          title="Search Factorio blueprints by category, game phase, and version"
          description="Every blueprint is a real importable string. Filter by production type, belt tier, game phase, and Factorio version to find what fits your factory."
        />
        <BlueprintBrowser blueprints={blueprints} />
      </div>
    </div>
  );
}
