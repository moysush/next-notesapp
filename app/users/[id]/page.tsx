import { getUserWithNotes } from "@/app/services/users";
import Link from "next/link";
import { notFound } from "next/navigation";

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const user = await getUserWithNotes(Number(id));

  if (!user) return notFound();

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <h3>Notes</h3>
      <ul>
        {user.notes.map((note) => (
          <Link href={`/notes/${note.id}`} key={note.id}>
            <li>
              {note.content} {note.important && <strong>(important)</strong>}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
