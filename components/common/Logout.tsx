"use client";

import signOut from "@/actions/sign-out";
import { useTransition } from "react";

export default function Logout() {
    const [pending, start] = useTransition();

    return (
        <button
            disabled={pending}
            onClick={() =>
                start(() => {
                    signOut();
                })
            }
            className="py-2 px-4 rounded-full font-medium bg-primary text-primary-foreground"
        >
            {pending ? "ออกจากระบบ..." : "ออกจากระบบ"}
        </button>
    );
}
