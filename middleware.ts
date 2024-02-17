import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./libs/auth";
import { getSession } from "./libs/auth";

const isManagerRoute = (pathname: string) => {
    return pathname.startsWith("/manage");
};

const isAuthRoute = (pathname: string) => {
    return pathname.startsWith("/auth");
};

const isCourseRoute = (pathname: string) => {
    return pathname.startsWith("/course");
};

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const session = await getSession();

    if (isManagerRoute(pathname) && session?.payload.role != "manager") {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (isAuthRoute(pathname) && session?.payload.id) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (isCourseRoute(pathname) && !session?.payload.id) {
        return NextResponse.redirect(new URL("/auth/signin", request.url));
    }

    return await updateSession(request);
}
