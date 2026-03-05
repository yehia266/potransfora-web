import { PLASMIC } from "@/plasmic-init";
import { PlasmicComponent } from "@plasmicapp/loader-nextjs";

export default async function Page() {
  const plasmicData = await PLASMIC.fetchComponentData("/");
  
  return (
    <main>
      <PlasmicComponent component="/" />
    </main>
  );
}
