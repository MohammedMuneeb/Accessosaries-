import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value;
    const session = token ? verifyToken(token) : null;

    if (!session || session.role !== "SELLER") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { name, description, price, category, imageUrl } = await request.json();

    if (!name || !price || !category) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        category,
        imageUrl,
        sellerId: session.userId,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("Product Create Error:", error);
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}
