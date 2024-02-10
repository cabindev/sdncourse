"use server";

import prisma from "@/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteCourse(id: string) {
    try {
        await prisma.course.delete({ where: { id } });
    } catch (error) {
        return { error: "something went wrong" };
    }

    revalidatePath("/manage/course");
    redirect("/manage/course");
}
