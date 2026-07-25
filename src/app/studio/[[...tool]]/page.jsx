"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

// El panel de administración vive en /studio
export const dynamic = "force-static";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
