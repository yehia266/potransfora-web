import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "7pwqU7haXFZF5jUGcLsJKT",
      token: "jPtmRTruvpcB4deLnP4lw0ZdxidwLygjUBwscHJiLGeFunoHjzMM79EkecmWfHi0RNyW60h7Ive4rHmqlYXQ",
    },
  ],
  // هذا الخيار مهم جداً لرؤية التعديلات غير المنشورة أثناء العمل
  preview: true,
});
