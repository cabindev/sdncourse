import CategoryCard from "./CategoryCard";

export default function CategoryCatalog() {
    return (
        <div className="py-4 flex justify-start items-center gap-2">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
        </div>
    );
}
