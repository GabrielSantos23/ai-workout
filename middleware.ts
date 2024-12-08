// middleware.ts ou middleware.js
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Verifique se o tipo de conteúdo da requisição é JSON
  if (request.headers.get("content-type")?.includes("application/json")) {
    console.log("Processing JSON payload");
  }
  return NextResponse.next();
}
