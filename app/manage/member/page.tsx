import prisma from "@/prisma";
import Jumbotron from "@/components/Jumbotron";
import Wrapper from "@/components/Wrapper";
import MemberTable from "@/components/member/MemberTable";

export default async function page() {
    const members = await prisma.member.findMany();
    const learned = await prisma.learned.findMany();
    const lesson = await prisma.lesson.findMany();

    return (
        <Wrapper>
            <Jumbotron primary="ผู้ใช้ทั้งหมด" secondary="ข้อมูลผู้ใข้ทั้งหมด" />
            <MemberTable lesson={lesson} learned={learned} members={members} />
        </Wrapper>
    );
}
