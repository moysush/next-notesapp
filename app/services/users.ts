import { eq } from "drizzle-orm";
import { db } from "../db";
import { users } from "../db/schema";
import { notFound } from "next/navigation";

export const getUsers = () => {
  return db.query.users.findMany();
};

// export const getUsersById = async (id: number) => {
//   const user = await db.query.users.findFirst({
//     where: eq(users.id, id),
//   });
//   if (!user) return notFound();
//   return user;
// };

// export const getNotesByUserId = async (userId: number) => {
//   return db.query.notes.findMany({
//     where: eq(notes.userId, userId),
//   });
// };

export const getUserWithNotes = async (userId: number) => {
  const user = db.query.users.findFirst({
    where: eq(users.id, userId),
    with: { notes: true },
  });
  if (!user) return notFound();
  return user;
};
