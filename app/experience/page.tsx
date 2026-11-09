import { permanentRedirect } from "next/navigation";

/** Legacy route — now redirected to /info */
export default function ExperiencePage() {
  permanentRedirect("/info");
}
