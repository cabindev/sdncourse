import prisma from "@/prisma";
import Wrapper from "@/components/Wrapper";
import CourseCatalog from "@/components/course/CourseCatalog";
import { getSession } from "@/libs/auth";

interface props {
    params: { id: string };
}

export default async function page({ params: { id } }: props) {
    const courses = await prisma.course.findMany({
        where: { category_id: id },
        include: { _count: { select: { lessions: true } } },
    });

    const session = await getSession();
    const learned = await prisma.learned.findMany({
        where: { member_id: session?.payload.id ?? "" },
    });

    return (
        <Wrapper>
            <CourseCatalog courses={courses} learned={learned} />
        </Wrapper>
    );
}
