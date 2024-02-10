import LessonCard from "./LessonCard";

interface props {
    lessons: any[];
}

export default function LessonCatalog({ lessons }: props) {
    return (
        <div className="border rounded-xl divide-y">
            {lessons.map((l, i) => (
                <LessonCard
                    key={i}
                    id={l.id}
                    episode={l.episode}
                    name={l.name}
                    code={l.code}
                    course_id={l.course_id}
                />
            ))}
        </div>
    );
}
