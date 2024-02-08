"use client";

import { useState } from "react";
import YouTube from "react-youtube";

export default function video({ code }: { code: string }) {
    const [isFinished, setIsFinished] = useState<boolean>(false);

    const getCurrentTime = (e: any) => {
        const duration = e.target.getDuration();
        const currentTime = e.target.getCurrentTime();
        if (currentTime / duration > 0.95) {
            setIsFinished(true);
        }
    };
    return (
        <YouTube
            className="rounded-lg overflow-hidden"
            videoId={code}
            onStateChange={(e) => getCurrentTime(e)}
        />
    );
}
