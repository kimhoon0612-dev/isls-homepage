import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const session = await getServerSession(authOptions as any) as any;

  if (!session?.user?.email) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { amount, currency, type, membershipCategory } = await req.json();

    if (!amount || !currency || !type) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const payment = await prisma.payment.create({
      data: {
        userId: user.id,
        amount,
        currency,
        type,
        status: "PENDING",
      },
    });

    return NextResponse.json({ paymentId: payment.id, message: "Payment record created" }, { status: 201 });
  } catch (error) {
    console.error("Payment creation error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
