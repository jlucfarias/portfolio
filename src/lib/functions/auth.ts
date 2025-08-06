import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { createAuthClient } from "better-auth/react"
import db from "./db";

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6,
  },
});
export const client = createAuthClient({});
export const {
  signUp,
  signIn,
  signOut,
} = client;
