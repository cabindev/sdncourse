"use server";

import prisma from "@/prisma";
import { getSession } from "@/libs/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { role } from "@prisma/client";

export default async function editMember(state: any, raw: FormData) {
    const session = await getSession();
    if (session?.payload.role != "manager") return { error: "unauthorized" };

    const id = raw.get("id") as string;
    const name = raw.get("name") as string;
    const email = raw.get("email") as string;
    const role = raw.get("role") as role;

    try {
        await prisma.member.update({
            where: { id },
            data: {
                name,
                email: email.toLowerCase(),
                role,
            },
        });
    } catch (error) {
        return { error: "something went wrong" };
    }

    revalidatePath("/manage/member/");
    redirect("/manage/member/");
}
