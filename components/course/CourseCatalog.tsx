import CourseCard from "./CourseCard";

interface props {
    isManager?: boolean;
}

export default function CourseCatalog({ isManager = false }: props) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start">
            <CourseCard isManager={isManager} />
            <CourseCard isManager={isManager} />
            <CourseCard isManager={isManager} />
            <CourseCard isManager={isManager} />
        </div>
    );
}
