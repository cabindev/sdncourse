import prisma from "@/prisma";
import Wrapper from "@/components/Wrapper";
import CourseEdit from "@/components/course/CourseEdit";
import LessonAdd from "@/components/lesson/LessonAdd";
import LessonCatalog from "@/components/lesson/LessonCatalog";
import { notFound } from "next/navigation";

interface props {
    params: { id: string };
}

export default async function page({ params: { id } }: props) {
    const course = await prisma.course.findUnique({ where: { id } });
    const lessons = await prisma.lesson.findMany({
        where: { course_id: id },
        orderBy: { episode: "asc" },
    });
    const categories = await prisma.category.findMany();

    if (!course) notFound();

    return (
        <Wrapper className="max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CourseEdit categories={categories} course={course} />
            <div className="space-y-4">
                <LessonAdd course_id={course.id} />
                {lessons.length > 0 && <LessonCatalog lessons={lessons} />}
            </div>
        </Wrapper>
    );
}
