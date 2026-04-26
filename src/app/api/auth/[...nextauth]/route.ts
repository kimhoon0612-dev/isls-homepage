import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token && session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions as any);

// Next.js 15+ App Router compatibility wrapper for NextAuth v4
export async function GET(req: any, props: { params: Promise<any> }) {
  try {
    const awaitedParams = await props.params;
    return await handler(req, { params: awaitedParams });
  } catch (error: any) {
    console.error("NextAuth GET Error:", error);
    return new Response(JSON.stringify({ error: error?.message || "Internal Server Error" }), { 
      status: 500, 
      headers: { "Content-Type": "application/json" } 
    });
  }
}

export async function POST(req: any, props: { params: Promise<any> }) {
  try {
    const awaitedParams = await props.params;
    return await handler(req, { params: awaitedParams });
  } catch (error: any) {
    console.error("NextAuth POST Error:", error);
    return new Response(JSON.stringify({ error: error?.message || "Internal Server Error" }), { 
      status: 500, 
      headers: { "Content-Type": "application/json" } 
    });
  }
}
