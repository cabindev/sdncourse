import prisma from "@/prisma";
import CategoryEdit from "@/components/category/CategoryEdit";

interface props {
    params: { id: string };
}

export default async function page({ params: { id } }: props) {
    const category = await prisma.category.findUnique({ where: { id } });

    return <CategoryEdit category={category} />;
}
