"use server";

import prisma from "@/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteCategory(id: string) {
    try {
        await prisma.category.delete({ where: { id } });
    } catch (error) {
        return { error: "something went wrong" };
    }

    revalidatePath("/manage/category");
    redirect("/manage/category");
}
