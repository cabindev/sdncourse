"use client";

import addCourse from "@/actions/add-course";
import Jumbotron from "../Jumbotron";
import Wrapper from "../Wrapper";
import Form from "../common/Form";
import Input from "../common/Input";
import Submit from "../common/Submit";
import { useFormState } from "react-dom";

interface props {
    categories: any[];
}

export default function CourseAdd({ categories }: props) {
    const [state, action] = useFormState(addCourse, undefined);

    return (
        <Wrapper className="max-w-xl">
            <Jumbotron primary="เพิ่มคอร์ส" secondary="กรอกข้อมูลเพื่อเพิ่มคอร์ส" />
            <Form action={action} className="space-y-2">
                <Input type="text" name="name" placeholder="ชื่อ" required />
                <Input
                    type="file"
                    name="image"
                    placeholder="รูปภาพ"
                    required
                    accept={"image/png, image/jpeg"}
                />
                <textarea
                    rows={5}
                    name="description"
                    placeholder="คำอธิบาย"
                    className="w-full px-4 py-2 outline-none border rounded-lg"
                    required
                />
                <select
                    name="category_id"
                    defaultValue="placeholder"
                    className="w-full px-4 py-2 outline-none border rounded-lg appearance-none"
                    required
                >
                    <option value="placeholder">เลือกหมวดหมู่</option>
                    {categories.map((c, i) => (
                        <option key={i} value={c.id}>
                            {c.name}
                        </option>
                    ))}
                </select>
                {state?.error && <p className="text-red-400">{state.error}</p>}
                <Submit />
            </Form>
        </Wrapper>
    );
}
