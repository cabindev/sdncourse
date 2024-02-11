import prisma from "@/prisma";
import Jumbotron from "@/components/Jumbotron";
import Wrapper from "@/components/Wrapper";
import CourseCatalog from "@/components/course/CourseCatalog";
import { getSession } from "@/libs/auth";

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
            <CourseCatalog isManager courses={courses} learned={learned} />
        </Wrapper>
    );
}
