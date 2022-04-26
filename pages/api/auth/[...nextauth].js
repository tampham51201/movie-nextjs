import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

import GoogleProvider from "next-auth/providers/google";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: {
    jwt: true,
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // Sign in with passwordless email link
  ],
  pages: {
    signIn: "/login",
  },
});
