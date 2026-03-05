import { PLASMIC } from "@/plasmic-init";
import { PlasmicComponent } from "@plasmicapp/loader-nextjs";

export default async function Page() {
  // جلب البيانات من مشروع Plasmic
  const plasmicData = await PLASMIC.fetchComponentData("Homepage");
  
  return (
    <main>
      <PlasmicComponent component="Homepage" />
    </main>
  );
}
