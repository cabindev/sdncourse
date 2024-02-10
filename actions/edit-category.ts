"use server";

import { getSession } from "@/libs/auth";
import prisma from "@/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function editCategory(state: any, raw: FormData) {
    const session = await getSession();
    if (session?.payload.role != "manager") return { error: "unauthorized" };

    const id = raw.get("id") as string;
    const name = raw.get("name") as string;

    try {
        await prisma.category.update({ where: { id }, data: { name } });
    } catch (error) {
        return { error: "something went wrong" };
    }

    revalidatePath("/manage/category");
    redirect("/manage/category");
}
