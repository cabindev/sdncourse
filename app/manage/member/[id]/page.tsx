import MemberEdit from "@/components/member/MemberEdit";
import prisma from "@/prisma";
import { notFound } from "next/navigation";

interface props {
    params: { id: string };
}

export default async function page({ params: { id } }: props) {
    const member = await prisma.member.findUnique({ where: { id } });

    if (!member) notFound();

    return <MemberEdit member={member} />;
}
