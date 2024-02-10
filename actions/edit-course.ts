"use server";

import prisma from "@/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function editCourse(state: any, raw: FormData) {
    const id = raw.get("id") as string;
    const name = raw.get("name") as string;
    const image = raw.get("image") as string;
    const description = raw.get("description") as string;
    const category_id = raw.get("category_id") as string;

    try {
        await prisma.course.update({
            where: { id },
            data: { name, image, description, category_id },
        });
    } catch (error) {
        return { error: "something went wrong" };
    }

    revalidatePath("/manage/course");
    redirect("/manage/course");
}
