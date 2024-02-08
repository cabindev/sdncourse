import LessonCard from "./LessonCard";

export default function LessonCatalog() {
    return (
        <div className="border rounded-xl divide-y">
            <LessonCard />
            <LessonCard />
            <LessonCard />
        </div>
    );
}
