import CourseCard from "./CourseCard";

interface props {
    courses: any[];
    learned: any[];
    isManager?: boolean;
}

export default function CourseCatalog({ courses, learned, isManager = false }: props) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start">
            {courses.map((c, i) => {
                const learnedLessonsCount = learned.filter((l) => l.course_id === c.id).length;
                const isPassed = learnedLessonsCount === c._count.lessions;

                return (
                    <CourseCard
                        key={i}
                        id={c.id}
                        name={c.name}
                        image={c.image}
                        description={c.description}
                        lessions={c._count.lessions}
                        isPassed={isPassed}
                        isManager={isManager}
                    />
                );
            })}
        </div>
    );
}
