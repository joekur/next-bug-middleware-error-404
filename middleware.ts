import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  throw new Error("Error inside middleware!");
}

export const config = {
  matcher: ["/"],
};
