import Link from "next/link";

type NoteProp = {
  id: number;
  content: string;
  important: boolean;
};

const NoteList = ({ notes }: { notes: NoteProp[] }) => {
  return (
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
  );
};

export default NoteList;
