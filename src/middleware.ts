import { NextRequest, NextResponse } from "next/server";

const publicPaths = ["/login", "/signup"];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = publicPaths.includes(path);

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/profile", "/login", "/signup"],
};
