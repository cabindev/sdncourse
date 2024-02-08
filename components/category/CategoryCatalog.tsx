import CategoryCard from "./CategoryCard";

interface props {
    categories: any[];
    isManager?: boolean;
}

export default function CategoryCatalog({ categories, isManager = false }: props) {
    return (
        <div className="py-4 flex justify-start items-center gap-2">
            {categories.map((c, i) => (
                <CategoryCard key={i} id={c.id} name={c.name} isManager={isManager} />
            ))}
        </div>
    );
}
