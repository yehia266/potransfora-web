import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
// التعديل هنا: استخدام @ لضمان الوصول للمجلد من أي مكان في المشروع
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

// تسجيل المكون بالأسم الصحيح للبحث
PLASMIC.registerComponent(EyeModal, {
  name: "EyeModal",
  props: {
    title: "string",
    description: "string",
    className: "string"
  },
});
