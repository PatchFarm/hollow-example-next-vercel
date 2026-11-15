import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

// The pipeline's post-deploy checks call this. It fails when the database is unreachable,
// so a deploy that cannot reach its database is rolled back.
export async function GET() {
  try {
    await db().$queryRaw`SELECT 1`;
    return Response.json({ status: "ok" });
  } catch {
    return Response.json({ status: "database unreachable" }, { status: 503 });
  }
}
