import { PlayCircleIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface props {
    isManager?: boolean;
}

export default function CourseCard({ isManager = false }: props) {
    const path = isManager ? "/manage/course/" : "/course/";

    return (
        <Link
            href={path}
            className="border shadow-lg rounded-lg overflow-hidden hover:translate-y-1 transition"
        >
            <img
                className="w-full"
                src={
                    "https://assets.futureskill.co/course/3c3ef862-da8c-4941-ba35-d0ef1e166079.jpg"
                }
            />
            <div className="py-2 px-4">
                <h3 className="tracking-tight font-bold">พัฒนาเว็บตั้งแต่เริ่มต้นจนจบ</h3>
                <p className="text-xs text-muted-foreground truncate">
                    นี้คือหลักสูตรพัฒนาเว็บตั้งแต่เริ่มต้นจนจบ
                </p>
                <div className="mt-2 flex justify-between items-center">
                    <div className=" text-indigo-500">
                        <PlayCircleIcon className="w-4 h-4 inline mr-1" />
                        <span className="text-sm font-medium">{0} บทเรียน</span>
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
