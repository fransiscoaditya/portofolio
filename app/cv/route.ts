import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "CVAdit.pdf");
    if (!fs.existsSync(filePath)) {
      return new Response("CV file not found", { status: 404 });
    }
    const fileBuffer = fs.readFileSync(filePath);

    return new Response(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="CV-Fransisco-Aditya-Widiyanto.pdf"',
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new Response("Error loading CV", { status: 500 });
  }
}
