import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { EyeModal } from "./components/EyeModal"; // هذا المسار صحيح بناءً على صورك

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
  props: {},
});
