import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import dynamic from 'next/dynamic';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "k7tGuJznBEQcX8ySStbZUu",
      token: "YESOdQOKFw7rt7VUwVMX4y27akAxU5iNWNdFdir3uzOKo5BqJXCtseaLJ2mqZTZ1oyPnpPIWDX9qJYuizA",
    },
  ],
  preview: true,
});

// الحل "خارج الصندوق": تحميل المكون ديناميكياً لتعطيل الـ SSR (Server Side Rendering)
// هذا يمنع خطأ "d is not a function" ويجعل المكون يظهر في الاستوديو
const EyeModal = dynamic(() => import("./components/EyeModal"), { ssr: false });

PLASMIC.registerComponent(EyeModal, {
  name: "EyeModal",
  // المانيوال المذكور في الرابط لضمان المسار
  importPath: "./components/EyeModal", 
  isAttachment: false,
  props: {
    title: "string",
    description: "string",
    className: "string"
  },
});
