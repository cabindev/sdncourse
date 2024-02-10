"use client";

import addLesson from "@/actions/add-lesson";
import Jumbotron from "../Jumbotron";
import Form from "../common/Form";
import Input from "../common/Input";
import Submit from "../common/Submit";
import { useFormState } from "react-dom";

interface props {
    course_id: string;
}

export default function LessonAdd({ course_id }: props) {
    const [state, action] = useFormState(addLesson, undefined);

    return (
        <>
            <Jumbotron primary="เพิ่มข้อมูลบทเรียน" secondary="กรอกข้อมูลเพื่อเพิ่มข้อมูลบทเรียน" />
            <Form action={action} className="space-y-2">
                <Input type="hidden" name="course_id" defaultValue={course_id} />
                <Input type="number" name="episode" placeholder="ตอนที่" required />
                <Input type="text" name="name" placeholder="ชื่อตอน" required />
                <Input type="text" name="link" placeholder="ลิ้งยูทูป" required />
                <textarea
                    rows={5}
                    name="description"
                    placeholder="คำอธิบาย"
                    className="w-full px-4 py-2 outline-none border rounded-lg"
                    required
                />
                {state?.error && <p className="text-red-400">{state.error}</p>}
                <Submit />
            </Form>
        </>
    );
}
