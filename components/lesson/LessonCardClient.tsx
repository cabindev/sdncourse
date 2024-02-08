import Link from "next/link";

interface props {
    name: string;
    course_id: string;
    episode: number;
}

export default function LessonCardClient({ name, course_id, episode }: props) {
    return (
        <Link
            href={"/course/" + course_id + "?ep=" + episode}
            className="w-full py-4 px-6 flex items-center gap-2 border-l-4 hover:border-l-[#2e2e31] transition"
        >
            {name}
        </Link>
    );
}
