import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "YOUR_PROJECT_ID", // سيظهر لك في صفحة Quickstarts في Plasmic
      token: "jPtmRTruvpcB4deLnP4lw0ZdxidwLygjUBwscHJiLGeFunoHjzMM79EkecmWfHi0RNyW60h7Ive4rHmqlYXQ", // هذا هو الـ API Token الذي نسخته من الصورة
    },
  ],
  preview: true,
});
