import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@prisma/client";
import { adapter } from "next/dist/server/web/adapter";
// const handler = NextAuth({
//   providers: [
//     Github({
//       clientId: process.env.GITHUB_CLIENT_ID!,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET!,
//     }),
//   ],
// });


export const authOptions = {
    adapter:PrismaAdapter(prisma),
    providers: [
      Github({
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  };
  
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };