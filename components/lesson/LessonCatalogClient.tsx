import LessonCardClient from "./LessonCardClient";

interface props {
    lessons: any[];
}

export default function LessonCatalogClient({ lessons }: props) {
    return (
        <div className="border flex flex-col rounded-lg justify-start items-center overflow-hidden divide-y">
            {lessons.map((l, i) => (
                <LessonCardClient
                    key={i}
                    name={l.name}
                    course_id={l.course_id}
                    episode={l.episode}
                />
            ))}
        </div>
    );
}
