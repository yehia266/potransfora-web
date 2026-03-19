import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
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

PLASMIC.registerComponent(EyeModal, {
  name: "EyeModal",
  importPath: "./components/EyeModal", 
  isAttachment: false, 
  props: {
    title: {
      type: "string",
      defaultValue: "System Verification",
    },
    description: {
      type: "string",
      defaultValue: "Unlock the workspace of the future with our top-rated curated resources.",
    },
    className: "string"
  },
});
