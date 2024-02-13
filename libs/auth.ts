import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = process.env.SECRET_KEY ?? "sdncourse";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("24 hrs from now")
        .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload;
}

export async function setSession(payload: {}) {
    const expires = new Date(Date.now() + 60 * 60 * 24 * 1000);
    const session = await encrypt({ payload, expires });
    cookies().set("session", session, { expires, httpOnly: true });
}

export async function getSession() {
    const session = cookies().get("session")?.value;
    if (!session) return null;
    return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
    const session = request.cookies.get("session")?.value;

    if (!session) {
        return;
    }

    const result = await fetch(`${request.nextUrl.origin}/api/auth/me`, {
        headers: { cookie: `session=${session}` },
        cache: "no-store",
    });

    const { member } = await result.json();

    const parsed = await decrypt(session);
    if (member) {
        parsed.payload = member;
    }
    parsed.expires = new Date(Date.now() + 60 * 60 * 24 * 1000);

    const response = NextResponse.next();
    response.cookies.set({
        name: "session",
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires,
    });

    return response;
}
