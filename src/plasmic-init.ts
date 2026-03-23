import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import EyeModal from "./components/EyeModal";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "gYhxLXJA7SYeXHXvvhkFsD",
      token: "BzpljYCTgzeh6iApjItozM7sSKWJ7B7qw9aU2b0aodfMyyXgKIGrgPdoD7qNw0WRhqqj83JtG5crEsJWJ1Hvw",
     
    },
  ],
  preview: true,
});

PLASMIC.registerComponent(EyeModal, {
  name: "EyeModal",
  importPath: "./components/EyeModal", 
  props: {
    title: {
      type: "string",
      defaultValue: "System Verification",
    },
    description: {
      type: "string",
      defaultValue: "Unlock the workspace of the future with our top-rated curated resources.",
    },
    buttonText: {
      type: "string",
      defaultValue: "Continue to Workspace",
    },
    // إضافة إمكانية التحكم في العرض من Plasmic مباشرة
    maxWidth: {
      type: "number",
      defaultValue: 400,
    },
    className: "string"
  },
});
