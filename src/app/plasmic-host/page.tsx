import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '../../plasmic-init'; // اخرج مرتين لتصل لمجلد src

export default function PlasmicHost() {
  return PLASMIC && <PlasmicCanvasHost />;
}
