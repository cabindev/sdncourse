import Jumbotron from "../Jumbotron";
import Form from "../common/Form";
import Input from "../common/Input";
import Submit from "../common/Submit";

export default function CourseEdit() {
    return (
        <div>
            <Jumbotron primary="เเก้ไขคอร์ส" secondary="กรอกข้อมูลเพื่อเเก้ไขคอร์ส" />
            <Form className="space-y-2">
                <Input type="text" name="name" placeholder="ชื่อ" required />
                <Input type="text" name="name" placeholder="ลิ้งรูปภาพ" required />
                <textarea
                    rows={5}
                    name="description"
                    placeholder="คำอธิบาย"
                    className="w-full px-4 py-2 outline-none border rounded-lg"
                    required
                />
                <Submit />
            </Form>
        </div>
    );
}
