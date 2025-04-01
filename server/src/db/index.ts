import { drizzle } from "drizzle-orm/postgres-js";
//adding esModuleInterop to tsconfig to allow commonjs and ES6 to be imported equally.
import postgres from "postgres";

// import the environment variables with dotenv
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

// import our table schemas as an object
import * as schema from "./schema";

// connect to the database
const connectionString = process.env.DATABASE_URL;
const client = postgres(connectionString, { max: 1, debug: true });
export const db = drizzle(client, { schema });

//=============================================docs=============================================

//connection with transaction pooler as it is in the docs (does not quite work)
// async function main() {
//   // Disable prefetch as it is not supported for "Transaction" pool mode
//   const client = postgres(process.env.DATABASE_URL, { prepare: false });
//   const db = drizzle({ client });
//   return db;
// }

// main();
