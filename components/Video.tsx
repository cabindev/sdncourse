"use client";

import addLearned from "@/actions/add-learned";
import { IframeHTMLAttributes, useRef } from "react";
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
        <div className="relative pb-[56.25%] pt-[30px] h-0 overflow-hidden max-w-full">
            <iframe
                title="YouTube Video"
                className="rounded-lg overflow-hidden absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${code}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />

            {/* <YouTube
                className="rounded-lg absolute top-0 left-0 right-0 bottom-0 w-full h-full"
                videoId={code}
                opts={{
                    playerVars: {
                        controls: 0,
                        rel: 0,
                        disablekb: 1,
                    },
                }}
                onStateChange={(e) => getCurrentTime(e)}
            /> */}
        </div>

        // <div className="max-w-full relative aspect-video overflow-hidden">
        // <YouTube
        //     className="rounded-lg absolute top-0 left-0 right-0 bottom-0 w-full h-full"
        //     videoId={code}
        //     opts={{
        //         playerVars: {
        //             controls: 0,
        //             rel: 0,
        //             disablekb: 1,
        //         },
        //     }}
        //     onStateChange={(e) => getCurrentTime(e)}
        // />
        // </div>
    );
}
