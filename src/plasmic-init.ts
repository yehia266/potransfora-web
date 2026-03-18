import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
// الاستيراد بدون أقواس لأنه أصبح Default Export في EyeModal.tsx
import EyeModal from "./components/EyeModal"; 

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "k7tGuJznBEQcX8ySStbZUu",
      token: "YESOdQOKFw7rt7VUwVMX4y27akAxU5iNWNdFdir3uzOKo5BqJXCtseaLJ2mqZTZ1oyPnpPIWDX9qJYuizA",
    },
  ],
  preview: true,
});

// التسجيل بوضع "المانيوال" لضمان اختفاء الـ TypeError وظهور المكون في البحث
PLASMIC.registerComponent(EyeModal, {
  name: "EyeModal",
  // المسار المانيوال لضمان أن Plasmic Studio يرى الكود بوضوح
  importPath: "./components/EyeModal", 
  isAttachment: false, 
  props: {
    title: "string",
    description: "string",
    className: "string"
  },
});
