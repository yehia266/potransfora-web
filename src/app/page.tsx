"use client";
import React from 'react';
import { PLASMIC } from "../plasmic-init";
import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-nextjs";

export default function Page() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      {/* هنا يتم استدعاء الصفحة بالكامل من Plasmic.
        الآن يمكنك تصميم المودال وكل شيء تريده داخل Plasmic
        بدون الحاجة للمس هذا الكود نهائياً.
      */}
      <PlasmicComponent component="Homepage" />
    </PlasmicRootProvider>
  );
}
