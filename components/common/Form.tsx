"use client";

import { useRef } from "react";

interface props {
    children: React.ReactNode;
    className?: string;
    action?: any;
}

export default function Form({ children, className, action }: props) {
    const form = useRef<HTMLFormElement>(null);

    return (
        <form
            // action={async (raw) => {
            //     await action(raw);
            //     form.current?.reset();
            // }}
            className={className}
        >
            {children}
        </form>
    );
}
