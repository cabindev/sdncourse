"use server";

import prisma from "@/prisma";
import { getSession } from "@/libs/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import uploadImage from "./upload-image";

export default async function editCourse(state: any, raw: FormData) {
    const session = await getSession();
    if (session?.payload.role != "manager") return { error: "unauthorized" };

    const id = raw.get("id") as string;
    const name = raw.get("name") as string;
    const image: File | null = raw.get("image") as unknown as File;
    const description = raw.get("description") as string;
    const category_id = raw.get("category_id") as string;

    try {
        if (!image) return { error: "no file uploaded" };
        await uploadImage(image);
        await prisma.course.update({
            where: { id },
            data: { name, image: image.name, description, category_id },
        });
    } catch (error) {
        return { error: "something went wrong" };
    }

    revalidatePath("/manage/course");
    redirect("/manage/course");
}
