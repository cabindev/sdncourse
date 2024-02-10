"use server";

import prisma from "@/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function addCourse(state: any, raw: FormData) {
    const name = raw.get("name") as string;
    const image = raw.get("image") as string;
    const description = raw.get("description") as string;
    const category_id = raw.get("category_id") as string;

    try {
        await prisma.course.create({ data: { name, image, description, category_id } });
    } catch (error) {
        return { error: "something went wrong" };
    }

    revalidatePath("/manage/course");
    redirect("/manage/course");
}
