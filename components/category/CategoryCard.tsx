import Link from "next/link";

export default function CategoryCard() {
    return (
        <Link
            href={"/category/"}
            className="px-4 py-2 border rounded-full text-center font-medium text-sm text-muted-foreground"
        >
            การพัฒนาเว็บ
        </Link>
    );
}
