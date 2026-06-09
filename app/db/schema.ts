import { pgTable, serial, text, boolean, integer } from "drizzle-orm/pg-core";

export const notes = pgTable("notes", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  important: boolean("important").notNull().default(false),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
});

export const users = pgTable("users", {
  id: serial().primaryKey(),
  name: text().notNull(),
  username: text().unique().notNull(),
});
