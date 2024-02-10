"use client";

import editCategory from "@/actions/edit-category";
import Jumbotron from "../Jumbotron";
import Wrapper from "../Wrapper";
import Form from "../common/Form";
import Input from "../common/Input";
import Submit from "../common/Submit";
import { useFormState } from "react-dom";
import CategoryDelete from "./CategoryDelete";

interface props {
    category: any;
}

export default function CategoryEdit({ category }: props) {
    const [state, action] = useFormState(editCategory, undefined);

    return (
        <Wrapper className="max-w-xl">
            <Jumbotron primary="เเก้ไขหมวดหมู่" secondary="กรอกข้อมูลเเก้ไขหมวดหมู่" />
            <Form action={action} className="space-y-2">
                <Input type="hidden" name="id" defaultValue={category.id} />
                <Input
                    type="text"
                    name="name"
                    placeholder="ชื่อ"
                    defaultValue={category.name}
                    required
                />
                {state?.error && <p className="text-red-400">{state.error}</p>}
                <Submit />
                <CategoryDelete id={category.id} />
            </Form>
        </Wrapper>
    );
}
