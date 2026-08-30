import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ADMIN_COOKIE_NAME, adminSessionToken } from "@/lib/admin/hash";

// Interim protection for /admin until real accounts (Clerk, per README) are
// wired up. Everything under /admin except the login page itself requires a
// session cookie matching the hash of ADMIN_PASSWORD (see .env.example).
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const expected = await adminSessionToken();
    const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;

    if (!expected || token !== expected) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("next", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
