import prisma from "@/prisma";
import Wrapper from "@/components/Wrapper";
import CategoryCatalog from "@/components/category/CategoryCatalog";
import CourseCatalog from "@/components/course/CourseCatalog";
import { getSession } from "@/libs/auth";

export default async function page() {
    const courses = await prisma.course.findMany({
        include: { _count: { select: { lessions: true } } },
    });
    const session = await getSession();
    const learned = await prisma.learned.findMany({
        where: { member_id: session?.payload.id ?? "" },
    });

    const categories = await prisma.category.findMany();

    return (
        <Wrapper>
            {categories.length > 0 && <CategoryCatalog categories={categories} />}
            <CourseCatalog courses={courses} learned={learned} />
        </Wrapper>
    );
}
