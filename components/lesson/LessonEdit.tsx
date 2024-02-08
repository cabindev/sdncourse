import Jumbotron from "../Jumbotron";
import Wrapper from "../Wrapper";
import Form from "../common/Form";
import Input from "../common/Input";
import Submit from "../common/Submit";

interface props {
    lesson: any;
}

export default function LessonEdit({ lesson }: props) {
    return (
        <Wrapper className="max-w-xl">
            <Jumbotron
                primary="เเก้ไขข้อมูลบทเรียน"
                secondary="กรอกข้อมูลเพื่อเเก้ไขข้อมูลบทเรียน"
            />
            <Form className="space-y-2">
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
                <Submit />
            </Form>
        </Wrapper>
    );
}
