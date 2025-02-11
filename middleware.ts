import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const authToken = req.cookies.get("authToken"); // Check authentication cookie
  const isAuthPage = req.nextUrl.pathname === "/"; // Auth page is on "/"

  if (!authToken && !isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url)); // Redirect unauthorized users
  }

  return NextResponse.next();
}
