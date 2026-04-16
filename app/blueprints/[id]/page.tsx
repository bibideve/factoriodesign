import { notFound } from "next/navigation";
import { blueprints } from "@/data/site";
import { BlueprintDetail } from "@/components/blueprint-detail";

type BlueprintPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return blueprints.map((bp) => ({ id: bp.id }));
}

export async function generateMetadata({ params }: BlueprintPageProps) {
  const { id } = await params;
  const blueprint = blueprints.find((bp) => bp.id === id);
  if (!blueprint) return { title: "Blueprint not found | Factorio Forge" };

  return {
    title: `${blueprint.title} | Factorio Forge`,
    description: blueprint.description,
  };
}

export default async function BlueprintPage({ params }: BlueprintPageProps) {
  const { id } = await params;
  const blueprint = blueprints.find((bp) => bp.id === id);
  if (!blueprint) notFound();

  return (
    <div className="section">
      <div className="container">
        <BlueprintDetail blueprint={blueprint} />
      </div>
    </div>
  );
}
