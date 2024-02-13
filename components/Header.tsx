"use client";

import Link from "next/link";
import Wrapper from "./Wrapper";
import Logout from "./common/Logout";
import { useState } from "react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import Sidebar from "./Sidebar";

interface props {
    member?: any;
}

export default function Header({ member }: props) {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <Wrapper>
            <div className="flex justify-between items-center py-4">
                <Link href="/">
                    <img className="h-10 w-10" src="/brand.svg" />
                </Link>

                <div className="hidden md:flex justify-center items-center gap-4">
                    <Link href="/" className="py-2 px-4 font-medium text-primary">
                        คอร์สทั้งหมด
                    </Link>

                    {member?.role?.includes(["manager"]) && (
                        <>
                            <Link
                                href="/manage/course"
                                className="py-2 px-4 font-medium text-primary"
                            >
                                จัดการคอร์ส
                            </Link>
                            <Link
                                href="/manage/category"
                                className="py-2 px-4 font-medium text-primary"
                            >
                                จัดการหมวดหมู่
                            </Link>
                            <Link
                                href="/manage/member"
                                className="py-2 px-4 font-medium text-primary"
                            >
                                จัดการผู้ใช้
                            </Link>
                        </>
                    )}

                    {member?.id ? (
                        <Logout />
                    ) : (
                        <>
                            <Link
                                href="/auth/signup"
                                className="py-2 px-4 font-medium text-primary"
                            >
                                สมัครสมาชิก
                            </Link>
                            <Link
                                href="/auth/signin"
                                className="py-2 px-4 rounded-full font-medium bg-primary text-primary-foreground"
                            >
                                เข้าสู่ระบบ
                            </Link>
                        </>
                    )}
                </div>

                <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} member={member} />
                {/* {isMenuOpen && (
                    <div
                        onClick={() => setMenuOpen(false)}
                        className="fixed top-0 left-0 bottom-0 right-0 bg-black/90 md:hidden"
                    ></div>
                )} */}

                <button className="block md:hidden" onClick={toggleMenu}>
                    <Bars3BottomRightIcon className="w-5 h-5" />
                </button>
            </div>
        </Wrapper>
    );
}
