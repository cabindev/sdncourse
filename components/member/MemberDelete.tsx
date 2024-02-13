"use client";

import deleteMember from "@/actions/delete-member";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useTransition } from "react";

interface props {
    id: string;
}

export default function MemberDelete({ id }: props) {
    const [pending, start] = useTransition();

    return (
        <button
            type="button"
            disabled={pending}
            onClick={() =>
                start(() => {
                    deleteMember(id);
                })
            }
        >
            <TrashIcon className="w-5 h-5 text-red-500" />
        </button>
    );
}
