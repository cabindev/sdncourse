import prisma from "@/prisma";
import Wrapper from "@/components/Wrapper";
import CategoryAdd from "@/components/category/CategoryAdd";
import CategoryCatalog from "@/components/category/CategoryCatalog";

export default async function page() {
    const categories = await prisma.category.findMany();

    return (
        <Wrapper className="max-w-xl">
            <CategoryAdd />
            <CategoryCatalog isManager categories={categories} />
        </Wrapper>
    );
}
