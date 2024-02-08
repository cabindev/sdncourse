import Jumbotron from "../Jumbotron";
import Wrapper from "../Wrapper";
import Form from "../common/Form";
import Input from "../common/Input";
import Submit from "../common/Submit";

export default function LessonEdit() {
    return (
        <Wrapper className="max-w-xl">
            <Jumbotron
                primary="เเก้ไขข้อมูลบทเรียน"
                secondary="กรอกข้อมูลเพื่อเเก้ไขข้อมูลบทเรียน"
            />
            <Form className="space-y-2">
                <Input type="number" name="order" placeholder="ตอนที่" />
                <Input type="text" name="name" placeholder="ชื่อตอน" />
                <Input type="text" name="link" placeholder="ลิ้งยูทูป" />
                <Submit />
            </Form>
        </Wrapper>
    );
}
