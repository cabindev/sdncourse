import Link from "next/link";

export default function LessonCardClient() {
    return (
        <Link
            href={"/course/"}
            className="w-full py-4 px-6 flex items-center gap-2 border-l-4 hover:border-l-[#2e2e31] transition"
        >
            episode name
        </Link>
    );
}
