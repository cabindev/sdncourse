import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function LessonCard() {
    return (
        <div className="grid grid-cols-6">
            <div className="flex justify-center items-center">1</div>
            <div className="col-span-3 py-4">
                <h4 className="font-medium">episode name</h4>
                <p className="truncate text-[#6f6f6f] text-sm">
                    https://www.youtube.com/watch?v=code
                </p>
            </div>
            <div className="flex justify-center items-center col-span-2 gap-4">
                <TrashIcon className="w-5 h-5 text-red-500" />
                <PencilIcon className="w-5 h-5 text-indigo-500" />
            </div>
        </div>
    );
}
