import React from "react";
import "./collections.css";
import VideoPlayer from "../components/VideoPlayer";
import AudioPlayer from "../components/AudioPlayer";

export default function Collections() {
  return    <section className="collections">
      <h1 className="titulo">Collections</h1>
      <VideoPlayer />
      <AudioPlayer />
    </section>;
}
