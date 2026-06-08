"use client";

import { Note } from "@/types";
import Link from "next/link";
import { useState } from "react";

const NoteList = ({ notes }: { notes: Note[] }) => {
  const [showImportant, setShowImportant] = useState(false);

  const notesToShow = showImportant ? notes.filter((n) => n.important) : notes;

  return (
    <div>
      <button onClick={() => setShowImportant(!showImportant)}>
        {showImportant ? "Show all" : "Show Important"}
      </button>
      <ul>
        {notesToShow.map((n) => (
          <li key={n.id}>
            <Link href={`/notes/${n.id}`}>{n.content}</Link>
            {n.important && <strong>(important)</strong>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
