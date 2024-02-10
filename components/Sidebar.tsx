import Link from "next/link";
import Logout from "./common/Logout";

interface props {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    member?: any;
}

export default function Sidebar({ isMenuOpen, toggleMenu, member }: props) {
    return (
        <div
            className={`fixed top-0 ${
                isMenuOpen ? "left-0" : "-left-60"
            } transition-[left] bottom-0 bg-white w-60 z-20 md:hidden`}
        >
            <div className="flex flex-col justify-center items-center gap-2 p-4">
                <Link
                    href="/"
                    onClick={toggleMenu}
                    className="w-full py-2 px-4 font-medium text-primary"
                >
                    คอร์สทั้งหมด
                </Link>

                {member?.role?.includes(["manager"]) && (
                    <>
                        <Link
                            href="/manage/course"
                            onClick={toggleMenu}
                            className="w-full py-2 px-4 font-medium text-primary"
                        >
                            จัดการคอร์ส
                        </Link>
                        <Link
                            href="/manage/category"
                            onClick={toggleMenu}
                            className="w-full py-2 px-4 font-medium text-primary"
                        >
                            จัดการหมวดหมู่
                        </Link>
                    </>
                )}

                {member?.id ? (
                    <Logout />
                ) : (
                    <>
                        <Link
                            href="/auth/signup"
                            onClick={toggleMenu}
                            className="w-full py-2 px-4 font-medium text-primary"
                        >
                            สมัครสมาชิก
                        </Link>
                        <Link
                            href="/auth/signin"
                            onClick={toggleMenu}
                            className="text-center w-full py-2 px-4 rounded-full font-medium bg-primary text-primary-foreground"
                        >
                            เข้าสู่ระบบ
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
