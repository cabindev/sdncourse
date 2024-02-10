import Link from "next/link";
import { PencilIcon } from "@heroicons/react/24/outline";
import LessonDelete from "./LessonDelete";

interface props {
    id: string;
    episode: number;
    name: string;
    code: string;
    course_id: string;
}

export default function LessonCard({ id, episode, name, code, course_id }: props) {
    return (
        <div className="grid grid-cols-6">
            <div className="flex justify-center items-center">{episode}</div>
            <div className="col-span-3 py-4">
                <h4 className="font-medium">{name}</h4>
                <p className="truncate text-[#6f6f6f] text-sm">
                    https://www.youtube.com/watch?v={code}
                </p>
            </div>
            <div className="flex justify-center items-center col-span-2 gap-4">
                <LessonDelete id={id} course_id={course_id} />
                <Link href={"/manage/lesson/" + id}>
                    <PencilIcon className="w-5 h-5 text-green-500" />
                </Link>
            </div>
        </div>
    );
}
