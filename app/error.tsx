"use client";

import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    console.log(error);
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-primary">มีบางอย่างผิดพลาด!</h1>
            <button onClick={() => reset()} className="group mt-2 hover:text-red-500 transition">
                ลองอีกครั้ง
                <ArrowPathIcon className="w-4 h-4 inline ml-1 group-hover:ml-2 transition-[margin]" />
            </button>
        </div>
    );
}
