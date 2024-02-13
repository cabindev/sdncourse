"use client";

import { role } from "@prisma/client";
import Jumbotron from "../Jumbotron";
import Form from "../common/Form";
import Input from "../common/Input";
import Submit from "../common/Submit";
import { useFormState } from "react-dom";
import editMember from "@/actions/edit-member";
import Wrapper from "../Wrapper";

interface props {
    member: any;
}

export default function MemberEdit({ member }: props) {
    const [state, action] = useFormState(editMember, undefined);

    const roles = Object.values(role);

    return (
        <Wrapper className="max-w-xl">
            <Jumbotron primary="เเก้ไขผู้ใช้" secondary="กรอกข้อมูลเพื่อเเก้ไขผู้ใช้" />
            <Form action={action} className="space-y-2">
                <Input type="hidden" name="id" defaultValue={member.id} />
                <Input
                    type="text"
                    name="name"
                    placeholder="ชื่อ"
                    defaultValue={member.name}
                    required
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="email"
                    defaultValue={member.email}
                    required
                />
                <select
                    name="role"
                    defaultValue={member.role ?? "placeholder"}
                    className="w-full px-4 py-2 outline-none border rounded-lg appearance-none"
                    required
                >
                    <option value="placeholder">เลือกยศ</option>
                    {roles.map((c, i) => (
                        <option key={i} value={c}>
                            {c}
                        </option>
                    ))}
                </select>

                {state?.error && <p className="text-red-400">{state.error}</p>}
                <Submit />
            </Form>
        </Wrapper>
    );
}
