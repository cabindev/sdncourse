import Jumbotron from "../Jumbotron";
import Form from "../common/Form";
import Input from "../common/Input";
import Submit from "../common/Submit";

export default function CategoryAdd() {
    return (
        <div>
            <Jumbotron primary="เพิ่มหมวดหมู่" secondary="กรอกข้อมูลเพิ่มหมวดหมู่" />
            <Form className="space-y-2">
                <Input type="text" name="name" placeholder="ชื่อ" required />
                <Submit />
            </Form>
        </div>
    );
}
