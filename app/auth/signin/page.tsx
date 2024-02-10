"use client";

import signIn from "@/actions/sign-in";
import Jumbotron from "@/components/Jumbotron";
import Wrapper from "@/components/Wrapper";
import Form from "@/components/common/Form";
import Input from "@/components/common/Input";
import Submit from "@/components/common/Submit";
import { useFormState } from "react-dom";

export default function page() {
    const [state, action] = useFormState(signIn, undefined);

    return (
        <Wrapper className="max-w-xl">
            <Jumbotron primary="เข้าสู่ระบบ" secondary="กรอกข้อมูลเพื่อเข้าสู่ระบบ" />
            <Form className="space-y-2" action={action}>
                <Input type="email" name="email" placeholder="อีเมล" />
                <Input type="password" name="password" placeholder="รหัสผ่าน" />
                {state?.error && <p className="text-red-400">{state.error}</p>}
                <Submit />
            </Form>
        </Wrapper>
    );
}
