"use client";

import { course } from "@prisma/client";
import Jumbotron from "../Jumbotron";
import Form from "../common/Form";
import Input from "../common/Input";
import Submit from "../common/Submit";
import editCourse from "@/actions/edit-course";
import { useFormState } from "react-dom";
import CourseDelete from "./CourseDelete";

interface props {
    categories: any[];
    course: course;
}

export default function CourseEdit({ course, categories }: props) {
    const [state, action] = useFormState(editCourse, undefined);

    return (
        <div>
            <Jumbotron primary="เเก้ไขคอร์ส" secondary="กรอกข้อมูลเพื่อเเก้ไขคอร์ส" />
            <Form action={action} className="space-y-2">
                <Input type="hidden" name="id" defaultValue={course.id} />
                <Input
                    type="text"
                    name="name"
                    placeholder="ชื่อ"
                    defaultValue={course.name}
                    required
                />
                <Input
                    type="text"
                    name="image"
                    placeholder="ลิ้งรูปภาพ"
                    defaultValue={course.image}
                    required
                />
                <textarea
                    rows={5}
                    name="description"
                    placeholder="คำอธิบาย"
                    className="w-full px-4 py-2 outline-none border rounded-lg"
                    defaultValue={course.description}
                    required
                />
                <select
                    name="category_id"
                    defaultValue={course.category_id ?? "placeholder"}
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
                <CourseDelete id={course.id} />
            </Form>
        </div>
    );
}
