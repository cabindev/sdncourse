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

    const opts = {
        height: "100%",
        width: "100%",
        playerVars: {
            controls: 0,
            rel: 0,
            disablekb: 1,
        },
    };

    return (
        <YouTube
            videoId={code}
            opts={opts}
            className=" aspect-video rounded-lg overflow-hidden"
            onStateChange={(e) => getCurrentTime(e)}
        />
    );
}
