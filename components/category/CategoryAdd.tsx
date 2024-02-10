"use client";

import addCategory from "@/actions/add-category";
import Jumbotron from "../Jumbotron";
import Form from "../common/Form";
import Input from "../common/Input";
import Submit from "../common/Submit";
import { useFormState } from "react-dom";

export default function CategoryAdd() {
    const [state, action] = useFormState(addCategory, undefined);

    return (
        <div>
            <Jumbotron primary="เพิ่มหมวดหมู่" secondary="กรอกข้อมูลเพิ่มหมวดหมู่" />
            <Form action={action} className="space-y-2">
                <Input type="text" name="name" placeholder="ชื่อ" required />
                {state?.error && <p className="text-red-400">{state.error}</p>}
                <Submit />
            </Form>
        </div>
    );
}
