import "dotenv/config";

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    //!exclamation mark is super important! null assertion in TS
    url: process.env.DATABASE_URL!,
  },
});
