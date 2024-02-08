import Jumbotron from "@/components/Jumbotron";
import Wrapper from "@/components/Wrapper";
import CourseCatalog from "@/components/course/CourseCatalog";

export default function page() {
    return (
        <Wrapper>
            <Jumbotron primary="คอร์สทั้งหมด" secondary="จัดการข้อมูลคอร์สทั้งหมด" />
            <CourseCatalog isManager />
        </Wrapper>
    );
}
