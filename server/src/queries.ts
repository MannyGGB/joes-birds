//set up functions to query the database with Drizzle
import { birdsTable, InsertBirdType, SelectBirdType } from "./db/schema";
import { db } from "./db/index";
import { eq } from "drizzle-orm";

// import { birdsData } from "./lib/birdsData";

export async function insertBird(newBird: InsertBirdType) {
  const insert = await db.insert(birdsTable).values(newBird).returning();
  return insert;
}

export async function getAllBirds() {
  const select = await db.select().from(birdsTable);

  return select;
}

export async function deleteBird(params) {
  const del = await db.delete(birdsTable).where(eq(params, birdsTable.id));

  return del;
}

export async function updateBird(body, params) {
  const update = await db
    .update(birdsTable)
    .set({
      bird_name: body.formValues.bird_name,
      bird_location: body.formValues.bird_location,
      bird_image: body.formValues.bird_image,
    })
    .where(eq(params, birdsTable.id));

  return update;
}

//===============================tutorial================
// export async function getAllBirds() {
//   const allBirds = await db.select().from(birdsTable);

//   return allBirds;
// }
