import prisma from "@/prisma";
import LessonEdit from "@/components/lesson/LessonEdit";
import { notFound } from "next/navigation";

interface props {
    params: { id: string };
}

export default async function page({ params: { id } }: props) {
    const lesson = await prisma.lesson.findUnique({ where: { id } });

    if (!lesson) notFound();

    return <LessonEdit lesson={lesson} />;
}
