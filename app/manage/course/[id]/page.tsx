import Wrapper from "@/components/Wrapper";
import CourseEdit from "@/components/course/CourseEdit";
import LessonAdd from "@/components/lesson/LessonAdd";
import LessonCatalog from "@/components/lesson/LessonCatalog";

export default function page() {
    return (
        <Wrapper className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CourseEdit />
            <div className="space-y-4">
                <LessonAdd />
                <LessonCatalog />
            </div>
        </Wrapper>
    );
}
