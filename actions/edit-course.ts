"use server";

import prisma from "@/prisma";

export default async function editCourse(id: string, raw: FormData) {
    const name = raw.get("name") as string;
    const image = raw.get("image") as string;
    const description = raw.get("description") as string;

    try {
        await prisma.course.update({ where: { id }, data: { name, image, description } });
        return { success: "edit course succeed" };
    } catch (error) {
        return { error: "something went wrong" };
    }
}
