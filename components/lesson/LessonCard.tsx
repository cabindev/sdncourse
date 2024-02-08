import Link from "next/link";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

interface props {
    id: string;
    episode: number;
    name: string;
    code: string;
}

export default function LessonCard({ id, episode, name, code }: props) {
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
                <TrashIcon className="w-5 h-5 text-red-500" />
                <Link href={"/manage/lesson/" + id}>
                    <PencilIcon className="w-5 h-5 text-indigo-500" />
                </Link>
            </div>
        </div>
    );
}
