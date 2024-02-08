import Link from "next/link";

interface props {
    id: string;
    name: string;
    isManager?: boolean;
}

export default function CategoryCard({ id, name, isManager = false }: props) {
    const path = isManager ? "/manage/category/" + id : "/category/" + id;

    return (
        <Link
            href={path}
            className="px-4 py-2 border rounded-full text-center font-medium text-sm text-muted-foreground"
        >
            {name}
        </Link>
    );
}
