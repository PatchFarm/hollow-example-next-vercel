/** How the home page shows a note's age. */
export function age(createdAt: Date, now: Date = new Date()): string {
  const minutes = Math.floor((now.getTime() - createdAt.getTime()) / 60_000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} h ago`;
  return `${Math.floor(hours / 24)} d ago`;
}
