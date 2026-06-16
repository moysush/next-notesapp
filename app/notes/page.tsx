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
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Notes</h2>
      <div className="mb-4">
        <Link
          href={showImportant ? "/notes" : "/notes?important=true"}
          className="text-purple-600 hover:underline"
        >
          {showImportant ? "Show all" : "Show important only"}
        </Link>
      </div>
      <ul className="space-y-2">
        {notes.map((note) => (
          <li key={note.id} className="border rounded p-3 hover:bg-gray-200">
            <Link
              href={`/notes/${note.id}`}
              className="text-purple-600 hover:underline"
            >
              {note.content}
            </Link>
            {note.important && <strong className="ml-2">(important)</strong>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
