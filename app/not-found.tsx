import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function notFound() {
    return (
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-white flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-primary">ไม่พบหน้านี้!</h1>
            <Link href="/" className="group mt-2 hover:text-red-500 transition">
                กลับสู่หน้าหลัก
                <ArrowRightIcon className="w-4 h-4 inline group-hover:ml-2 transition-[margin]" />
            </Link>
        </div>
    );
}
