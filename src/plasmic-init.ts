import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "k7tGuJznBEQcX8ySStbZUu",
      token: "YESOdQOKFw7rt7VUwVMX4y27akAxU5iNWNdFdir3uzOKo5BqJXCtseaLJ2mqZTZ1oyPnpPIWDX9qJYuizA",
    },
  ],
  preview: true,
});

// تسجيل المكون مباشرة بدون dynamic import داخل الملف 
// لأننا عالجنا المشكلة في صفحة الـ Host نفسها
import EyeModal from "./components/EyeModal";

PLASMIC.registerComponent(EyeModal, {
  name: "EyeModal",
  importPath: "./components/EyeModal", 
  props: {
    title: "string",
    description: "string",
    className: "string"
  },
});
