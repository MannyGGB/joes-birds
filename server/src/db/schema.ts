//import the table function and data constraints

import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const birdsTable = pgTable("birds", {
  id: serial("id").primaryKey(),
  bird_name: varchar("bird_name", { length: 255 }),
  bird_location: text("bird_location"),
  // timestamp: timestamp("timestamp", { mode: "string" }).notNull().defaultNow(),
});

export type InsertBirdType = InferInsertModel<typeof birdsTable>;
export type SelectBirdType = InferSelectModel<typeof birdsTable>;
