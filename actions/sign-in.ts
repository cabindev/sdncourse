"use server";

import { setSession } from "@/libs/auth";
import prisma from "@/prisma";
import { compare } from "bcrypt";
import { redirect } from "next/navigation";

export default async function signIn(state: any, raw: FormData) {
    const email = raw.get("email") as string;
    const password = raw.get("password") as string;

    let success: boolean;

    try {
        const exist = await prisma.member.findUnique({ where: { email } });
        if (!exist) return { error: "doesn't has this email" };

        const match = await compare(password, exist.password);
        if (!match) return { error: "password is not correct" };

        setSession({ id: exist.id, name: exist.email, role: exist.role });
        success = true;
    } catch (error) {
        return { error: "something went wrong" };
    }

    if (success) redirect("/");
}
