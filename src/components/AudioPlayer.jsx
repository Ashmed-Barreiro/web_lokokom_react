import React from "react";
import "./AudioPlayer.css";

export default function AudioPlayer() {
    return <>
        <audio controls>
            <source src="./src/data/img/musik.mp3" type="audio/mpeg" />
            <source src="./src/data/img/musik.ogg" type="audio/ogg" />
            Your browser does not support the audio element.
        </audio>
    </>;

}