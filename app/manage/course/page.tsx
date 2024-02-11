import prisma from "@/prisma";
import Jumbotron from "@/components/Jumbotron";
import Wrapper from "@/components/Wrapper";
import CourseCatalog from "@/components/course/CourseCatalog";
import { getSession } from "@/libs/auth";
import Link from "next/link";

export default async function page() {
    const courses = await prisma.course.findMany({
        include: { _count: { select: { lessions: true } } },
    });

    const session = await getSession();
    const learned = await prisma.learned.findMany({
        where: { member_id: session?.payload.id ?? "" },
    });

    return (
        <Wrapper>
            <Jumbotron primary="คอร์สทั้งหมด" secondary="จัดการข้อมูลคอร์สทั้งหมด" />
            <Link href="/manage/course/new">
                <button className="py-2 px-4 font-medium rounded-lg bg-primary text-primary-foreground mb-4">
                    สร้างคอร์ส
                </button>
            </Link>
            <CourseCatalog isManager courses={courses} learned={learned} />
        </Wrapper>
    );
}
