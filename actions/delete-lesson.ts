"use server";

import prisma from "@/prisma";
import { revalidatePath } from "next/cache";

export default async function deleteLesson(id: string, course_id: string) {
    try {
        await prisma.lesson.delete({ where: { id } });
    } catch (error) {
        return { error: "something went wrong" };
    }

    revalidatePath("/manage/course/" + course_id);
}
