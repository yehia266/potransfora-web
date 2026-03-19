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

// التعديل السحري: نضمن استخراج الـ default مباشرة لمنع خطأ "d is not a function"
const EyeModal = dynamic(() => import("./components/EyeModal").then(mod => mod.default), { 
  ssr: false,
  loading: () => null 
});

PLASMIC.registerComponent(EyeModal, {
  name: "EyeModal",
  importPath: "./components/EyeModal", 
  isAttachment: false, 
  props: {
    title: "string",
    description: "string",
    className: "string"
  },
});
