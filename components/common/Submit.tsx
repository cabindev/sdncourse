"use client";

import { useFormStatus } from "react-dom";

export default function submit() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full py-2 px-4 font-medium rounded-lg bg-primary text-primary-foreground"
        >
            {pending ? "ยืนยัน..." : "ยืนยัน"}
        </button>
    );
}
