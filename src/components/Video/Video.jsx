import "./Video.css";
import videoImg from "../../assets/video.png";
import TLgradient from "../../assets/vid-top-left-gradient.png";
import BRgradient from "../../assets/vid-bottom-right-gradient.png";
import { useState } from "react";

const Video = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };
  return (
    <section className="video">
    <div className="video__container">
      {isVideoPlaying ? (
        <iframe
          width="100%"
          height="100%"
          src=""
          title="Video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          <img className="video__image" src={videoImg} alt="video" />
          <button className="video__play" onClick={handlePlayClick}></button>
        </>
      )}
      <div className="video__overlay"></div>
    </div>
    <img
      className="video-gradient video__tl-gradient"
      src={TLgradient}
      alt="gradient"
    />
    <img
      className="video-gradient video__br-gradient"
      src={BRgradient}
      alt="gradient"
    />
  </section>
);
};

export default Video;
