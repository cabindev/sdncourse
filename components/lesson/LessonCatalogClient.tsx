import LessonCardClient from "./LessonCardClient";

export default function LessonCatalogClient() {
    return (
        <div className="border flex flex-col rounded-lg justify-start items-center overflow-hidden divide-y">
            <LessonCardClient />
            <LessonCardClient />
            <LessonCardClient />
            <LessonCardClient />
        </div>
    );
}
