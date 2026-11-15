import { db } from "@/lib/db";
import { age } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function Home() {
  const notes = await db().note.findMany({ orderBy: { createdAt: "desc" }, take: 20 });
  return (
    <main>
      <h1>The Hollow: Next.js and Prisma on Vercel</h1>
      <p>{notes.length === 0 ? "No notes yet." : `${notes.length} recent notes:`}</p>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.body} <small>({age(note.createdAt)})</small>
          </li>
        ))}
      </ul>
    </main>
  );
}
