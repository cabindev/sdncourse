import Jumbotron from "@/components/Jumbotron";
import Wrapper from "@/components/Wrapper";
import CategoryCatalog from "@/components/category/CategoryCatalog";
import CourseCatalog from "@/components/course/CourseCatalog";

export default function page() {
    return (
        <Wrapper>
            <CategoryCatalog />
            <CourseCatalog />
        </Wrapper>
    );
}
