import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface props {
    name: string;
    course_id: string;
    episode: number;
    isLearned?: boolean;
}

export default function LessonCardClient({ name, course_id, episode, isLearned = false }: props) {
    return (
        <Link
            href={"/course/" + course_id + "?ep=" + episode}
            className={`w-full py-4 px-6 grid grid-cols-5 gap-2 border-l-4 ${
                isLearned ? "hover:border-l-green-500" : "hover:border-l-muted-foreground"
            }  transition`}
        >
            <p className="col-span-4">{name}</p>
            <div className="flex justify-center items-center">
                {isLearned ? (
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />
                ) : (
                    <XCircleIcon className="w-5 h-5 text-muted-foreground" />
                )}
            </div>
        </Link>
    );
}
