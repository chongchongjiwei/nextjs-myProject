import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

// const handler = NextAuth({
//   providers: [
//     Github({
//       clientId: process.env.GITHUB_CLIENT_ID!,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET!,
//     }),
//   ],
// });


export const authOptions = {
    providers: [
      Github({
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      }),
    ],
  };
  
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };