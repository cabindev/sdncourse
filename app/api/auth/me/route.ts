import prisma from "@/prisma";
import { decrypt } from "@/libs/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const session = request.cookies.get("session")?.value;

    if (!session) {
        return NextResponse.json({ message: "unauthorized" }, { status: 401 });
    }

    const parsed = await decrypt(session);
    const member = await prisma.member.findUnique({ where: { id: parsed.payload.id } });

    if (member) {
        const { id, email, role } = member;
        return NextResponse.json({ member: { id, email: email, role } }, { status: 200 });
    }

    return NextResponse.json({ message: "unauthorized" }, { status: 401 });
}
