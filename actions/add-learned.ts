"use server";

import prisma from "@/prisma";
import { getSession } from "@/libs/auth";

export default async function addLearned(lesson_id: string) {
    const session = await getSession();
    if (!session) return { error: "unauthorized" };

    try {
        await prisma.learned.create({
            data: { lesson_id: lesson_id, member_id: session.payload.id },
        });
        return { success: "add learned succeed" };
    } catch (error) {
        return { error: "something went wrong" };
    }
}
