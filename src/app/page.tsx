import { PLASMIC } from "@/plasmic-init"; // هذا هو السطر الذي يربط الملف بالموقع
import { PlasmicComponent } from "@plasmicapp/loader-nextjs";

export default async function Page() {
  return <PlasmicComponent component="Homepage" />;
}