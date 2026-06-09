import { getNotesByUserId, getUsersById } from "@/app/services/users";
import Link from "next/link";

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const user = await getUsersById(Number(id));
  const notes = await getNotesByUserId(Number(id));

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <h3>Notes</h3>
      <ul>
        {notes.map((note) => (
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
