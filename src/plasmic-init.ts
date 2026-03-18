import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { EyeModal } from "./components/EyeModal"; // المسار التقليدي المضمون لمشروعك

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "k7tGuJznBEQcX8ySStbZUu",
      token: "YESOdQOKFw7rt7VUwVMX4y27akAxU5iNWNdFdir3uzOKo5BqJXCtseaLJ2mqZTZ1oyPnpPIWDX9qJYuizA",
    },
  ],
  preview: true,
});

// تسجيل المكون مع دمج إعدادات الظهور اليدوي (Manual) والمسار التقليدي
PLASMIC.registerComponent(EyeModal, {
  name: "EyeModal",
  // نستخدم المسار النسبي هنا أيضاً ليتوافق مع الـ Build
  importPath: "./components/EyeModal", 
  isAttachment: false, 
  props: {
    title: "string",
    description: "string",
    className: "string"
  },
});
