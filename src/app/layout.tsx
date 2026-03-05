import { PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/plasmic-init";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PlasmicRootProvider loader={PLASMIC}>
          {children}
        </PlasmicRootProvider>
      </body>
    </html>
  );
}