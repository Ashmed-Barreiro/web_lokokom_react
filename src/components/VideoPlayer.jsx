import React from "react";
import "./VideoPlayer.css";

export default function VideoPlayer() {
    return <>
        <video width="320" height="240" controls>
            <source src="./src/data/img/video.mp4" type="video/mp4" />
            <source src="./src/data/img/video_web.webm" type="video/webm" />
            Your browser does not support the video tag.
        </video>
    </>;

}