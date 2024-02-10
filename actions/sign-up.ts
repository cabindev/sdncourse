"use server";

import prisma from "@/prisma";
import { hash } from "bcrypt";
import { redirect } from "next/navigation";

export default async function signUp(state: any, raw: FormData) {
    const name = raw.get("name") as string;
    const email = raw.get("email") as string;
    const password = raw.get("password") as string;

    let success: boolean;

    try {
        const exist = await prisma.member.findUnique({ where: { email } });
        if (exist) return { error: "already has this email" };

        await prisma.member.create({
            data: {
                name,
                email: email.toLowerCase(),
                password: await hash(password, 10),
            },
        });
        success = true;
    } catch (error) {
        return { error: "something went wrong" };
    }

    if (success) redirect("/auth/signin");
}
