import "dotenv/config";
import { defineConfig } from "prisma/config";

// Read by the Prisma CLI (migrate, studio, db seed) — the app itself gets
// its connection via the driver adapter in lib/db.ts, not from here.
export default defineConfig({
  schema: "./prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL || "postgresql://placeholder:placeholder@localhost:5432/placeholder",
  },
  migrations: {
    seed: "tsx prisma/seed.ts",
  },
});
