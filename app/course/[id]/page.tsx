import Video from "@/components/Video";
import Wrapper from "@/components/Wrapper";
import LessonCatalogClient from "@/components/lesson/LessonCatalogClient";

export default function page() {
    return (
        <Wrapper>
            <div className="grid grid-cols-3 gap-4 items-start">
                <div className="col-span-2">
                    <Video code="BCNJv236g5k" />
                </div>
                <LessonCatalogClient />
            </div>
        </Wrapper>
    );
}
