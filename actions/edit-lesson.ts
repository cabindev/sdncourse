"use server";

import prisma from "@/prisma";
import { getSession } from "@/libs/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function editLesson(state: any, raw: FormData) {
    const session = await getSession();
    if (session?.payload.role != "manager") return { error: "unauthorized" };

    const id = raw.get("id") as string;
    const course_id = raw.get("course_id") as string;
    const episode = raw.get("episode") as string;
    const name = raw.get("name") as string;
    const link = raw.get("link") as string;
    const description = raw.get("description") as string;

    const code = link.split("?v=")[1];

    try {
        await prisma.lesson.update({
            where: { id },
            data: {
                episode: parseInt(episode),
                name,
                code: code,
                description,
            },
        });
    } catch (error) {
        return { error: "something went wrong" };
    }

    revalidatePath("/manage/course/" + course_id);
    redirect("/manage/course/" + course_id);
}
