import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { NextURL } from "next/dist/server/web/next-url";

export function middleware(request: NextRequest): NextResponse | undefined {   
  const url: NextURL = request.nextUrl.clone(); 

  url.pathname = "/maintenance";

  if (request.nextUrl.pathname === "/") 
    return NextResponse.redirect(url);
}