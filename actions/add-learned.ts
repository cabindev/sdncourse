"use server";

import prisma from "@/prisma";
import { getSession } from "@/libs/auth";

export default async function addLearned(lesson_id: string, course_id: string) {
    const session = await getSession();
    if (!session) return { error: "unauthorized" };

    try {
        const isLearned = await prisma.learned.findFirst({
            where: {
                lesson_id: lesson_id,
                member_id: session.payload.id,
                course_id: course_id,
            },
        });
        if (isLearned) return { error: "already learned this lesson" };

        await prisma.learned.create({
            data: {
                lesson_id: lesson_id,
                member_id: session.payload.id,
                course_id: course_id,
            },
        });
        return { success: "add learned succeed" };
    } catch (error) {
        return { error: "something went wrong" };
    }
}
