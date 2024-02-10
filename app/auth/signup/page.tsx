"use client";

import signUp from "@/actions/sign-up";
import Jumbotron from "@/components/Jumbotron";
import Wrapper from "@/components/Wrapper";
import Form from "@/components/common/Form";
import Input from "@/components/common/Input";
import Submit from "@/components/common/Submit";
import { useFormState } from "react-dom";

export default function page() {
    const [state, action] = useFormState(signUp, undefined);

    return (
        <Wrapper className="max-w-xl">
            <Jumbotron primary="สมัครสมาชิก" secondary="กรอกข้อมูลเพื่อสมัครสมาชิก" />
            <Form className="space-y-2" action={action}>
                <Input type="text" name="name" placeholder="ชื่อ" />
                <Input type="email" name="email" placeholder="อีเมล" />
                <Input type="password" name="password" placeholder="รหัสผ่าน" />
                {state?.error && <p className="text-red-400">{state.error}</p>}
                <Submit />
            </Form>
        </Wrapper>
    );
}
