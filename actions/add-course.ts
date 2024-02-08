"use server";

import prisma from "@/prisma";

export default async function addCourse(raw: FormData) {
    const name = raw.get("name") as string;
    const image = raw.get("image") as string;
    const description = raw.get("description") as string;

    try {
        await prisma.course.create({ data: { name, image, description } });
        return { success: "add course succeed" };
    } catch (error) {
        return { error: "something went wrong" };
    }
}
