import Link from "next/link";
import { PlayCircleIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

interface props {
    id: string;
    image: string;
    name: string;
    description: string;
    lessions: number;
    isManager?: boolean;
}

export default function CourseCard({
    id,
    image,
    name,
    description,
    lessions,
    isManager = false,
}: props) {
    const path = isManager ? "/manage/course/" + id : "/course/" + id + "?ep=1";

    return (
        <Link
            href={path}
            className="border shadow-lg rounded-lg overflow-hidden hover:translate-y-1 transition"
        >
            <img className="w-full" src={image} />
            <div className="py-2 px-4">
                <h3 className="tracking-tight font-bold">{name}</h3>
                <p className="text-xs text-muted-foreground">{description}</p>
                <div className="mt-2 flex justify-between items-center">
                    <div className=" text-indigo-500">
                        <PlayCircleIcon className="w-4 h-4 inline mr-1" />
                        <span className="text-sm font-medium">{lessions} บทเรียน</span>
                    </div>
                    <div className="text-green-500">
                        <CheckBadgeIcon className="w-4 h-4 inline mr-1" />
                        <span className="text-sm font-medium">ผ่านเเล้ว</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
