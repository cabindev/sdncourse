import Jumbotron from "../Jumbotron";
import Form from "../common/Form";
import Input from "../common/Input";
import Submit from "../common/Submit";

export default function LessonAdd() {
    return (
        <>
            <Jumbotron primary="เพิ่มข้อมูลบทเรียน" secondary="กรอกข้อมูลเพื่อเพิ่มข้อมูลบทเรียน" />
            <Form className="space-y-2">
                <Input type="number" name="order" placeholder="ตอนที่" />
                <Input type="text" name="name" placeholder="ชื่อตอน" />
                <Input type="text" name="link" placeholder="ลิ้งยูทูป" />
                <Submit />
            </Form>
        </>
    );
}
