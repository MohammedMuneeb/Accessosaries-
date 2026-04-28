import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { generateOTP, sendOTPEmail } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { email, role } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Update or create user with OTP
    await prisma.user.upsert({
      where: { email },
      update: { otp, otpExpiry, role: role || "BUYER" },
      create: { email, otp, otpExpiry, role: role || "BUYER" },
    });

    await sendOTPEmail(email, otp);

    return NextResponse.json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("OTP Error:", error);
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}
