import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    console.log("Request received");

    const bodyText = await req.text();
    console.log("Request Body as Text:", bodyText);

    let body = null;
    try {
      body = JSON.parse(bodyText);
    } catch (error) {
      console.error("Failed to parse body as JSON:", error);
    }

    console.log("Request Body:", body);

    if (!body || typeof body !== "object") {
      console.error("Invalid body:", body);
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 }
      );
    }

    const { name, email, password } = body;

    if (!name || !email || !password) {
      console.error("Missing required fields:", { name, email, password });
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.error("User already exists");
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    if (!user) {
      console.error("User creation failed");
      return NextResponse.json(
        { message: "User creation failed" },
        { status: 500 }
      );
    }
    console.log("User created successfully:", user.id);
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    // Alterei aqui para garantir que sempre haja um objeto de erro
    console.error("Error in POST /api/register:", error);

    // Garantir que o erro seja tratado como objeto, mesmo que seja um tipo inesperado
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    return NextResponse.json(
      { message: "An error occurred during registration", error: errorMessage },
      { status: 500 }
    );
  }
}
