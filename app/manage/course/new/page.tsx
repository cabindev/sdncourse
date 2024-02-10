import prisma from "@/prisma";
import CourseAdd from "@/components/course/CourseAdd";

export default async function page() {
    const categories = await prisma.category.findMany();

    return <CourseAdd categories={categories} />;
}
