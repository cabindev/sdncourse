"use server";

import prisma from "@/prisma";
import { getSession } from "@/libs/auth";
import { revalidatePath } from "next/cache";

export default async function deleteMember(id: string) {
    const session = await getSession();
    if (session?.payload.role != "manager") return { error: "unauthorized" };

    try {
        await prisma.member.delete({ where: { id } });
    } catch (error) {
        return { error: "something went wrong" };
    }

    revalidatePath("/manage/member");
}
