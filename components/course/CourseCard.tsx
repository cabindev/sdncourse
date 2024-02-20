import Link from "next/link";
import Image from "next/image";
import { PlayCircleIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

interface props {
    id: string;
    image: string;
    name: string;
    description: string;
    lessions: number;
    isPassed?: boolean;
    isManager?: boolean;
}

export default function CourseCard({
    id,
    image,
    name,
    description,
    lessions,
    isPassed = false,
    isManager = false,
}: props) {
    const path = isManager ? "/manage/course/" + id : "/course/" + id + "?ep=1";

    let image_link;
    const fileIdMatch = image.match(/\/file\/d\/([^\/]+)\//);

    if (fileIdMatch && fileIdMatch[1]) {
        image_link = "https://drive.google.com/uc?id=" + fileIdMatch[1];
    } else {
        image_link = image;
    }

    return (
        <Link
            href={path}
            className="border shadow-lg rounded-lg overflow-hidden hover:translate-y-1 transition"
        >
            <Image
                width={200}
                height={200}
                src={image_link}
                alt={image}
                className="w-full h-36 object-cover"
                loading="lazy"
            />
            <div className="py-2 px-4">
                <h3 className="tracking-tight font-bold">{name}</h3>
                <p className="text-xs text-muted-foreground truncate">{description}</p>
                <div className="mt-2 flex justify-between items-center">
                    <div className=" text-indigo-500">
                        <PlayCircleIcon className="w-4 h-4 inline mr-1" />
                        <span className="text-sm font-medium">{lessions} บทเรียน</span>
                    </div>
                    {isPassed && (
                        <div className="text-green-500">
                            <CheckBadgeIcon className="w-4 h-4 inline mr-1" />
                            <span className="text-sm font-medium">ผ่านเเล้ว</span>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}
