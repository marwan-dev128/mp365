import "dotenv/config";
import { defineConfig, env } from "prisma/config";

// Read by the Prisma CLI (migrate, studio, db seed) — the app itself gets
// its connection via the driver adapter in lib/db.ts, not from here.
export default defineConfig({
  schema: "./prisma/schema.prisma",
  datasource: { url: env("DATABASE_URL") },
  migrations: {
    seed: "tsx prisma/seed.ts",
  },
});
