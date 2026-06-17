import Link from "next/link";
import { getNotes } from "../services/notes";
import NoteList from "./NoteList";
import { Suspense } from "react";

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
      <Suspense fallback={<p>Loading notes...</p>}>
        <NoteList notes={notes} />
      </Suspense>
    </div>
  );
};

export default Notes;
