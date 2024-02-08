import prisma from "@/prisma";
import Wrapper from "@/components/Wrapper";
import CourseCatalog from "@/components/course/CourseCatalog";

interface props {
    params: { id: string };
}

export default async function page({ params: { id } }: props) {
    const courses = await prisma.course.findMany({
        where: { category_id: id },
        include: { _count: { select: { lessions: true } } },
    });

    return (
        <Wrapper>
            <CourseCatalog courses={courses} />
        </Wrapper>
    );
}
