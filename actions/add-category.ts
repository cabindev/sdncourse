"use server";

import prisma from "@/prisma";
import { getSession } from "@/libs/auth";
import { revalidatePath } from "next/cache";

export default async function addCategory(state: any, raw: FormData) {
    const session = await getSession();
    if (session?.payload.role != "manager") return { error: "unauthorized" };

    const name = raw.get("name") as string;

    try {
        await prisma.category.create({ data: { name } });
    } catch (error) {
        return { error: "something went wrong" };
    }

    revalidatePath("/manage/category");
}
