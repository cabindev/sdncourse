"use server";

import prisma from "@/prisma";
import { revalidatePath } from "next/cache";

export default async function addLesson(state: any, raw: FormData) {
    const course_id = raw.get("course_id") as string;
    const episode = raw.get("episode") as string;
    const name = raw.get("name") as string;
    const link = raw.get("link") as string;
    const description = raw.get("description") as string;

    const code = link.split("?v=")[1];

    try {
        await prisma.lesson.create({
            data: {
                episode: parseInt(episode),
                name,
                code: code,
                course_id,
                description,
            },
        });
    } catch (error) {
        return { error: "something went wrong" };
    }

    revalidatePath("/manage/course/" + course_id);
}
