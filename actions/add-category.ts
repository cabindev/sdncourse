"use server";

import prisma from "@/prisma";
import { revalidatePath } from "next/cache";

export default async function addCategory(state: any, raw: FormData) {
    const name = raw.get("name") as string;

    try {
        await prisma.category.create({ data: { name } });
    } catch (error) {
        return { error: "something went wrong" };
    }

    revalidatePath("/manage/category");
}
