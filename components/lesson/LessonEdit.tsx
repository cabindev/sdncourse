"use client";

import editLesson from "@/actions/edit-lesson";
import Jumbotron from "../Jumbotron";
import Wrapper from "../Wrapper";
import Form from "../common/Form";
import Input from "../common/Input";
import Submit from "../common/Submit";
import { useFormState } from "react-dom";

interface props {
    lesson: any;
}

export default function LessonEdit({ lesson }: props) {
    const [state, action] = useFormState(editLesson, undefined);

    return (
        <Wrapper className="max-w-xl">
            <Jumbotron
                primary="เเก้ไขข้อมูลบทเรียน"
                secondary="กรอกข้อมูลเพื่อเเก้ไขข้อมูลบทเรียน"
            />
            <Form action={action} className="space-y-2">
                <Input type="hidden" name="id" defaultValue={lesson.id} />
                <Input type="hidden" name="course_id" defaultValue={lesson.course_id} />
                <Input
                    type="number"
                    name="episode"
                    placeholder="ตอนที่"
                    defaultValue={lesson.episode}
                    required
                />
                <Input
                    type="text"
                    name="name"
                    placeholder="ชื่อตอน"
                    defaultValue={lesson.name}
                    required
                />
                <Input
                    type="text"
                    name="link"
                    placeholder="ลิ้งยูทูป"
                    defaultValue={"https://www.youtube.com/watch?v=" + lesson.code}
                    required
                />
                <textarea
                    rows={5}
                    name="description"
                    placeholder="คำอธิบาย"
                    defaultValue={lesson.description}
                    className="w-full px-4 py-2 outline-none border rounded-lg"
                    required
                />
                {state?.error && <p className="text-red-400">{state.error}</p>}
                <Submit />
            </Form>
        </Wrapper>
    );
}
