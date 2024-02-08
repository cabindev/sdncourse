import Jumbotron from "../Jumbotron";
import Wrapper from "../Wrapper";
import Form from "../common/Form";
import Input from "../common/Input";
import Submit from "../common/Submit";

export default function CourseAdd() {
    return (
        <Wrapper className="max-w-xl">
            <Jumbotron primary="เพิ่มคอร์ส" secondary="กรอกข้อมูลเพื่อเพิ่มคอร์ส" />
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
        </Wrapper>
    );
}
