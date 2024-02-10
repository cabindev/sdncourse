"use client";

import deleteCategory from "@/actions/delete-category";
import { useTransition } from "react";

interface props {
    id: string;
}

export default function CategoryDelete({ id }: props) {
    const [pending, start] = useTransition();

    return (
        <button
            type="button"
            disabled={pending}
            onClick={() =>
                start(() => {
                    deleteCategory(id);
                })
            }
            className="w-full py-2 px-4 font-medium rounded-lg bg-red-500 text-primary-foreground"
        >
            {pending ? "ลบหมวดหมู่..." : "ลบหมวดหมู่"}
        </button>
    );
}
