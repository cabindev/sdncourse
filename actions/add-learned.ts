"use server";

import prisma from "@/prisma";

export default async function addLearned(lesson_id: string) {
    try {
        await prisma.lesson.update({
            where: { id: lesson_id },
            data: { member_id: "0880f7c5-7443-4b12-b403-4f93fb9ce9a0" },
        });
        return { success: "add learned succeed" };
    } catch (error) {
        return { error: "something went wrong" };
    }
}
