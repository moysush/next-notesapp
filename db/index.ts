import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

export const db = drizzle(process.env.DATABASE_URL!, { schema });

// if (process.env.NODE_ENV !== "production") {
// // eslint-disable-next-line
//   (globalThis as any).db = db;
// }
