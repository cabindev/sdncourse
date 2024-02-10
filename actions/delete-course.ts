"use server";

import prisma from "@/prisma";
import { getSession } from "@/libs/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteCourse(id: string) {
    const session = await getSession();
    if (session?.payload.role != "manager") return { error: "unauthorized" };

    try {
        await prisma.course.delete({ where: { id } });
    } catch (error) {
        return { error: "something went wrong" };
    }

    revalidatePath("/manage/course");
    redirect("/manage/course");
}
