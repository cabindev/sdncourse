import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "./libs/auth";

const isManagerRoute = (pathname: string) => {
    return pathname.startsWith("/manage");
};

const isAuthRoute = (pathname: string) => {
    return pathname.startsWith("/auth");
};

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const session = await getSession();

    if (isManagerRoute(pathname) && session.payload.role != "manager") {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (isAuthRoute(pathname) && session) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/manage/:path*", "/auth/:path*"],
};
