"use client";

import Link from "next/link";
import Wrapper from "./Wrapper";

export default function Header() {
    return (
        <Wrapper>
            <div className="flex justify-between items-center py-4">
                <Link href="/">
                    <img className="h-10 w-10" src="/brand.svg" />
                </Link>
                <div className="space-x-2">
                    <Link
                        href="/manage/course"
                        className="py-2 px-4 rounded-full font-medium text-primary"
                    >
                        จัดการคอร์ส
                    </Link>
                    <Link
                        href="/auth/signup"
                        className="py-2 px-4 rounded-full font-medium text-primary"
                    >
                        สมัครสมาชิก
                    </Link>
                    <Link
                        href="/auth/signin"
                        className="py-2 px-4 rounded-full font-medium bg-primary text-primary-foreground"
                    >
                        เข้าสู่ระบบ
                    </Link>
                </div>
            </div>
        </Wrapper>
    );
}
