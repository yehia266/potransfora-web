import { PLASMIC } from "../../plasmic-init"; // لاحظ النقطتين مرتين للخروج من app و plasmic-host
import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
