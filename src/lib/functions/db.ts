import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/prisma/client";

declare global {
  var prismaGlobal: undefined | PrismaClient;
}

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = globalThis.prismaGlobal ?? new PrismaClient({ adapter });

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
