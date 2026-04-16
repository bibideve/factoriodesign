import { BlueprintWorkbench } from "@/components/blueprint-workbench";
import { starterSmeltingBlueprint } from "@/data/blueprint-demo";

export default function HomePage() {
  return (
    <section className="section" style={{ paddingTop: "2rem" }}>
      <div className="container">
        <BlueprintWorkbench blueprint={starterSmeltingBlueprint} />
      </div>
    </section>
  );
}
