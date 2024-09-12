// import "./Video.css";
// import videoImg from "../../assets/video.png";
// import TLgradient from "../../assets/vid-top-left-gradient.png";
// import BRgradient from "../../assets/vid-bottom-right-gradient.png";
// import { useState } from "react";
// import lambda from "../../assets/lambda-demo-1080.mp4"; //

// const Video = () => {
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   const handlePlayClick = () => {
//     setIsVideoPlaying(true);
//   };
//   return (
//     <section className="video">
//     <div className="video__container">
//     {isVideoPlaying ? (
//           <video
//             width="100%"
//             height="100%"
//             controls
//             autoPlay
//             src={lambda}
//           >
//             Your browser does not support the video tag.
//           </video>
//         ) : (
//           <>
//             <img className="video__image" src={videoImg} alt="video thumbnail" />
//             <button className="video__play" onClick={handlePlayClick}></button>
//           </>
//         )}
//       <div className="video__overlay"></div>
//     </div>
//     <img
//       className="video-gradient video__tl-gradient"
//       src={TLgradient}
//       alt="gradient"
//     />
//     <img
//       className="video-gradient video__br-gradient"
//       src={BRgradient}
//       alt="gradient"
//     /> 
//   </section>
// );
// };

// export default Video;

import "./Video.css";
// import TLgradient from "../../assets/vid-top-left-gradient.png";
// import BRgradient from "../../assets/vid-bottom-right-gradient.png";
import gifImg from "../../assets/1080.gif"; // Import your GIF

const Video = () => {
  return (
    <section className="video">
      <div className="video__title">Lambda Lens Demo</div>
      <div className="video__container">
        <img className="video__gif" src={gifImg} alt="GIF" /> {/* Display GIF */}
      </div>
      
    </section>
  );
};

export default Video;

// import "./Video.css";
// import videoImg from "../../assets/video.png";
// import TLgradient from "../../assets/vid-top-left-gradient.png";
// import BRgradient from "../../assets/vid-bottom-right-gradient.png";
// import { useState } from "react";
// import lambda from "../../assets/lambda-demo-1080.mp4";

// const Video = () => {
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   const handlePlayClick = () => {
//     setIsVideoPlaying(true);
//   };

//   return (
//     <section className="video">
//       <div className="video__container">
//         {isVideoPlaying ? (
//           <video
//             controls
//             autoPlay
//             src={lambda}
//           >
//             Your browser does not support the video tag.
//           </video>
//         ) : (
//           <>
//             <img className="video__image" src={videoImg} alt="video thumbnail" />
//             <button className="video__play" onClick={handlePlayClick}>
//               Play
//             </button>
//           </>
//         )}
//       </div>
//       <img
//         className="video-gradient video__tl-gradient"
//         src={TLgradient}
//         alt="top-left gradient"
//       />
//       <img
//         className="video-gradient video__br-gradient"
//         src={BRgradient}
//         alt="bottom-right gradient"
//       />
//     </section>
//   );
// };

// export default Video;