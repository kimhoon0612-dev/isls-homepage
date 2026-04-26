import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Eximbay payment result callback
// Eximbay calls this URL after payment is completed
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const paymentId = searchParams.get("paymentId");
  const resCd = searchParams.get("resCd"); // Eximbay result code: "0000" = success
  const eximbayTxId = searchParams.get("transaction_id") || searchParams.get("txId");

  if (!paymentId) {
    return NextResponse.redirect(new URL("/membership/join?error=invalid", req.url));
  }

  try {
    const success = resCd === "0000" || !resCd; // If no resCd, treat as success (test mode)

    if (success) {
      // Update payment status to COMPLETED
      await prisma.payment.update({
        where: { id: paymentId },
        data: {
          status: "COMPLETED",
          ...(eximbayTxId ? { eximbayTxId } : {}),
        },
      });

      // Upgrade user to PAID_USER
      const payment = await prisma.payment.findUnique({
        where: { id: paymentId },
        include: { user: true },
      });

      if (payment?.userId) {
        await prisma.user.update({
          where: { id: payment.userId },
          data: { role: "PAID_USER" },
        });
      }

      return NextResponse.redirect(new URL("/membership/mypage?payment=success", req.url));
    } else {
      // Payment failed
      await prisma.payment.update({
        where: { id: paymentId },
        data: { status: "FAILED" },
      });
      return NextResponse.redirect(new URL("/membership/join?error=payment_failed", req.url));
    }
  } catch (error) {
    console.error("Payment callback error:", error);
    return NextResponse.redirect(new URL("/membership/join?error=server_error", req.url));
  }
}

// Eximbay can also POST the callback
export async function POST(req: NextRequest) {
  return GET(req);
}
