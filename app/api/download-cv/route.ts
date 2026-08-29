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
        "Content-Disposition": 'attachment; filename="CV-Fransisco-Aditya-Widiyanto.pdf"',
        "Content-Length": fileBuffer.length.toString(),
        "Cache-Control": "no-cache",
      },
    });
  } catch {
    return new Response("Error downloading CV", { status: 500 });
  }
}
