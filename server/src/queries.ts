//set up functions to query the database with Drizzle
import { birdsTable, InsertBirdType, SelectBirdType } from "./db/schema";
import { db } from "./db/index";
// import { birdsData } from "./lib/birdsData";

export async function insertBird(newBird: InsertBirdType) {
  const insert = await db.insert(birdsTable).values(newBird).returning();
  return insert;
}

export async function getAllBirds() {
  const select = await db.select().from(birdsTable);

  return select;
}

//===============================tutorial================
// export async function getAllBirds() {
//   const allBirds = await db.select().from(birdsTable);

//   return allBirds;
// }
