"use client";

import deleteCourse from "@/actions/delete-course";
import { useTransition } from "react";

interface props {
    id: string;
}

export default function CourseDelete({ id }: props) {
    const [pending, start] = useTransition();

    return (
        <button
            type="button"
            disabled={pending}
            onClick={() =>
                start(() => {
                    deleteCourse(id);
                })
            }
            className="w-full py-2 px-4 font-medium rounded-lg bg-red-500 text-primary-foreground"
        >
            {pending ? "ลบคอร์ส..." : "ลบคอร์ส"}
        </button>
    );
}
