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
    const lessions = await prisma.lesson.findMany({ orderBy: { episode: "asc" } });
    const lession = await prisma.lesson.findUnique({
        where: { course_id: id, episode: parseInt(ep) },
    });

    if (!lession) notFound();

    return (
        <Wrapper>
            <div className="grid grid-cols-3 gap-4 items-start">
                <div className="col-span-2">
                    <Video code={lession.code} />
                </div>
                <LessonCatalogClient lessons={lessions} />
            </div>
        </Wrapper>
    );
}
