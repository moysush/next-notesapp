import Link from "next/link";
import { getNotes } from "../services/notes";

const Notes = async ({
  searchParams,
}: {
  searchParams: Promise<{ important?: string }>;
}) => {
  const { important } = await searchParams;
  const showImportant = important === "true";
  const allNotes = await getNotes(showImportant);
  const notes = showImportant ? allNotes.filter((n) => n.important) : allNotes;
  return (
    <div>
      <h2>Notes</h2>
      <div>
        <Link href={showImportant ? "/notes" : "/notes?important=true"}>
          {showImportant ? "Show all" : "Show important only"}
        </Link>
      </div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link href={`/notes/${note.id}`}>{note.content}</Link>
            <div>{note.important && <strong>(important)</strong>}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
