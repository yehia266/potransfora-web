import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
// استيراد المكون من المجلد الذي أنشأته
import { EyeModal } from "./components/EyeModal";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "k7tGuJznBEQcX8ySStbZUu",
      token: "YESOdQOKFw7rt7VUwVMX4y27akAxU5iNWNdFdir3uzOKo5BqJXCtseaLJ2mqZTZ1oyPnpPIWDX9qJYuizA",
    },
  ],
  // هذا الخيار مهم جداً لرؤية التعديلات غير المنشورة أثناء العمل
  preview: true,
});

// تسجيل المكون لكي يظهر في واجهة Plasmic (Drag & Drop)
PLASMIC.registerComponent(EyeModal, {
  name: "EyeModal",
  props: {
    // يمكنك إضافة خيارات هنا لاحقاً إذا أردت التحكم في النصوص من داخل Plasmic
  },
});
