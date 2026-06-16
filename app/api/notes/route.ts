import { getNotes } from "@/app/services/notes";
import { NextResponse } from "next/server";

export const GET = async () => {
  const notes = await getNotes(false);
  return NextResponse.json(notes);
};
