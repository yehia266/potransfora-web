"use client"; // تحويل الصفحة لـ Client Component فوراً

import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '../../plasmic-init'; 

// أمر لـ Next.js: لا تحاول أبداً توليد هذه الصفحة وقت الـ Build
export const dynamic = 'force-dynamic'; 

export default function PlasmicHost() {
  // التأكد من أننا في المتصفح قبل الرندر
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return PLASMIC && <PlasmicCanvasHost />;
}
