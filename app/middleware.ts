// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const ADMIN_PATHS = ["/admin"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (ADMIN_PATHS.some(path => pathname.startsWith(path))) {
    const token = req.cookies.get("accessToken")?.value;

    if (!token) {
      // Redirect to login if no token
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }

    try {
      const JWT_SECRET = process.env.JWT_SECRET!;
      const payload = jwt.verify(token, JWT_SECRET) as any;

      if (payload.role !== "Admin") {
        const url = req.nextUrl.clone();
        url.pathname = "/unauthorized"; // custom unauthorized page
        return NextResponse.redirect(url);
      }
    } catch {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  // Continue for other requests
  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
