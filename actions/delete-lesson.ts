"use server";

import { getSession } from "@/libs/auth";
import prisma from "@/prisma";
import { revalidatePath } from "next/cache";

export default async function deleteLesson(id: string, course_id: string) {
    const session = await getSession();
    if (session?.payload.role != "manager") return { error: "unauthorized" };

    try {
        await prisma.lesson.delete({ where: { id } });
    } catch (error) {
        return { error: "something went wrong" };
    }

    revalidatePath("/manage/course/" + course_id);
}
