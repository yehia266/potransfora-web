import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
// استخدام المسار المطلق لضمان عدم حدوث تعارض في الـ Build
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

// تسجيل المكون مع الإعدادات اليدوية (Manual) لضمان ظهوره في البحث
PLASMIC.registerComponent(EyeModal, {
  name: "EyeModal",
  // إضافة مسار الاستيراد يدوياً كمرجع إضافي لـ Plasmic
  importPath: "@/components/EyeModal", 
  // التأكد من أن المكون متاح كعنصر مستقل وليس ملحقاً
  isAttachment: false, 
  props: {
    title: "string",
    description: "string",
    className: "string",
  },
});
