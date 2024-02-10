"use client";

import deleteLesson from "@/actions/delete-lesson";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useTransition } from "react";

interface props {
    id: string;
    course_id: string;
}

export default function LessonDelete({ id, course_id }: props) {
    const [pending, start] = useTransition();

    return (
        <button
            type="button"
            disabled={pending}
            onClick={() =>
                start(() => {
                    deleteLesson(id, course_id);
                })
            }
        >
            <TrashIcon className="w-5 h-5 text-red-500" />
        </button>
    );
}
