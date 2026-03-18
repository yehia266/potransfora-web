import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
// التعديل الجوهري: استخدام @ لضمان أن المسار يعمل من أي مكان في المشروع
import { EyeModal } from "@/components/EyeModal"; 

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "k7tGuJznBEQcX8ySStbZUu",
      token: "YESOdQOKFw7rt7VUwVMX4y27akAxU5iNWNdFdir3uzOKo5BqJXCtseaLJ2mqZTZ1oyPnpPIWDX9qJYuizA",
    },
  ],
  preview: true,
});

// تسجيل المكون
PLASMIC.registerComponent(EyeModal, {
  name: "EyeModal",
  props: {
    title: "string",
    description: "string",
    className: "string"
  },
});
