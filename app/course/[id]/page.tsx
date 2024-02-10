import prisma from "@/prisma";
import Video from "@/components/Video";
import Wrapper from "@/components/Wrapper";
import LessonCatalogClient from "@/components/lesson/LessonCatalogClient";
import { notFound } from "next/navigation";

interface props {
    params: { id: string };
    searchParams: { ep: string };
}

export default async function page({ params: { id }, searchParams: { ep } }: props) {
    const lessions = await prisma.lesson.findMany({
        where: { course_id: id },
        orderBy: { episode: "asc" },
    });
    const lession = await prisma.lesson.findFirst({
        where: { course_id: id, episode: parseInt(ep) },
    });

    if (!lession) notFound();

    return (
        <Wrapper>
            <div className="grid grid-cols-3 gap-4 items-start">
                <div className="col-span-3 md:col-span-2 gap-4">
                    <Video code={lession.code} lesson_id={lession.id} />
                </div>
                <div className="col-span-3 md:col-span-1">
                    <LessonCatalogClient lessons={lessions} />
                </div>
            </div>
        </Wrapper>
    );
}
