import LessonCardClient from "./LessonCardClient";

interface props {
    learned: any[];
    lessons: any[];
}

export default function LessonCatalogClient({ learned, lessons }: props) {
    const learnedLessonIds = new Set(learned.map((item) => item.lesson_id));

    return (
        <div className="border flex flex-col rounded-lg justify-start items-center overflow-hidden divide-y">
            {lessons.map((l, i) => (
                <LessonCardClient
                    key={i}
                    name={l.name}
                    course_id={l.course_id}
                    episode={l.episode}
                    isLearned={learnedLessonIds.has(l.id)}
                />
            ))}
        </div>
    );
}
