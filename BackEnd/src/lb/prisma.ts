import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "@prisma/client/extension";


if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL não foi definida no arquivo .env");
}

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL,
});

export const prisma = new PrismaClient({ adapter });
