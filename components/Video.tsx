"use client";

import addLearned from "@/actions/add-learned";
import YouTube from "react-youtube";

interface props {
    code: string;
    lesson_id: string;
    course_id: string;
}
export default function Video({ code, lesson_id, course_id }: props) {
    const getCurrentTime = (e: any) => {
        const duration = e.target.getDuration();
        const currentTime = e.target.getCurrentTime();
        if (currentTime / duration > 0.95) {
            addLearned(lesson_id, course_id).then((d) => {
                if (d.error) {
                    alert(d.error);
                } else {
                    alert(d.success);
                }
            });
        }
    };

    return (
        <YouTube
            className="rounded-lg overflow-hidden"
            videoId={code}
            opts={{
                playerVars: {
                    controls: 0,
                },
            }}
            onStateChange={(e) => getCurrentTime(e)}
        />
    );
}
