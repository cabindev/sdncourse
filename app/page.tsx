import prisma from "@/prisma";
import Wrapper from "@/components/Wrapper";
import CategoryCatalog from "@/components/category/CategoryCatalog";
import CourseCatalog from "@/components/course/CourseCatalog";

export default async function page() {
    const courses = await prisma.course.findMany({
        include: { _count: { select: { lessions: true } } },
    });
    const categories = await prisma.category.findMany();

    return (
        <Wrapper>
            <CategoryCatalog categories={categories} />
            <CourseCatalog courses={courses} />
        </Wrapper>
    );
}
