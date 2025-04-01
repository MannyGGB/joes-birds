//import the table function and data constraints

import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const birdsTable = pgTable("birds", {
  id: serial("id").primaryKey(),
  bird_name: varchar("bird_name", { length: 255 }),
  bird_location: text("bird_location"),
  bird_image: text("bird_image"),
});

export type InsertBirdType = InferInsertModel<typeof birdsTable>;
export type SelectBirdType = InferSelectModel<typeof birdsTable>;
