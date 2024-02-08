import Wrapper from "@/components/Wrapper";
import CategoryAdd from "@/components/category/CategoryAdd";
import CategoryCatalog from "@/components/category/CategoryCatalog";

export default function page() {
    return (
        <Wrapper className="max-w-xl">
            <CategoryAdd />
            <CategoryCatalog />
        </Wrapper>
    );
}
