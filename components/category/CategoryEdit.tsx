import Jumbotron from "../Jumbotron";
import Wrapper from "../Wrapper";
import Form from "../common/Form";
import Input from "../common/Input";
import Submit from "../common/Submit";

export default function CategoryEdit() {
    return (
        <Wrapper className="max-w-xl">
            <Jumbotron primary="เเก้ไขหมวดหมู่" secondary="กรอกข้อมูลเเก้ไขหมวดหมู่" />
            <Form className="space-y-2">
                <Input type="text" name="name" placeholder="ชื่อ" required />
                <Submit />
            </Form>
        </Wrapper>
    );
}
