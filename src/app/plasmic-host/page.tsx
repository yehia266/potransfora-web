import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '@/plasmic-init'; // استدعاء ملف الإعدادات فقط

export default function PlasmicHost() {
  return PLASMIC && <PlasmicCanvasHost />;
}
