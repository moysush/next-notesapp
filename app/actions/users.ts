"use server";

import bcrypt from "bcryptjs";
import { users } from "../db/schema";
import { db } from "../db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const registerUser = async (formData: FormData) => {
  const username = formData.get("username") as string;
  const name = formData.get("name") as string;
  const password = formData.get("password") as string;

  const passwordHash = await bcrypt.hash(password, 10);

  await db.insert(users).values({ username, name, passwordHash });

  revalidatePath("/login");
  redirect("/login");
};
