// import React, { useState } from "react";
// // import { assets } from "../../../utils/assets";
// import "./Auth/Html.css";
// import ReactPlayer from "react-player";
// import { MdHeight } from "react-icons/md";

// const Html1 = () => {
//   const [videoUrl, setVideoUrl] = useState("");

//   const videoPlayer = (key) => {
//     if (key === "BUTTON_1") {
//       setVideoUrl("'https://youtu.be/MDLn5-zSQQI?si=-vc2EbBwa7KIUGJz");
//     } else if (key === "BUTTON_2") {
//       setVideoUrl("https://youtu.be/gOioxltfh48?si=CoBevaVBp6zIzIY-");
//     } else if (key === "BUTTON_3") {
//       setVideoUrl("https://youtu.be/Hh_se2Zqsdk?si=65iWdIkAwPPy0GGt");
//     } else if (key === "BUTTON_4") {
//       setVideoUrl("'https://youtu.be/Z07d9Vu7GKM?si=hu5BpJ5_YRCBt0s_");
//     } else if (key === "BUTTON_5") {
//       setVideoUrl("https://youtu.be/GteJWhCikCk?si=uSxUzI8Vjud039Fy' ");
//     } else if (key === "BUTTON_6") {
//       setVideoUrl("https://youtu.be/QfYJevoR3OA?si=j65HmNLOfjvtDSV7'");
//     }
//   };
//   return (
//     <div>
//       <div style={{ border: "solid 2px ", width: "100vw" }}>
//         <div style={{ border: "solid 2px " }} className="name">
//           <nav className="home-nav-h">
//             <img src={assets.LOGO} alt="Logo" className="intro-logo" />
//           </nav>
//         </div>
//         <div className="row">
//           <div className="col-md-2">
//             <h4> Numbers of videos : </h4>
//             <h5> HTML </h5>
//             <button onClick={() => videoPlayer("BUTTON_1")}>
//               1.HTML Basics For Beginners
//             </button>
//             <button onClick={() => videoPlayer("BUTTON_2")}>
//               2. HTML Hyperlinks
//             </button>
//             <button onClick={() => videoPlayer("BUTTON_3")}>
//               3. Image tag in HTML
//             </button>
//             <button onClick={() => videoPlayer("BUTTON_3")}>
//               4. Selectors in CSS
//             </button>
//             <button onClick={() => videoPlayer("BUTTON_3")}>
//               5. CSS Flex-Box
//             </button>
//             <button onClick={() => videoPlayer("BUTTON_3")}>
//               6. 'Media-queries
//             </button>
//           </div>
//           <div className="col-md-10">
//             <h1>HTML & CSS</h1>
//             <div className="inter_video">
//               {videoUrl && (
//                 <ReactPlayer
//                   url={videoUrl}
//                   controls={true}
//                   width="1000px"
//                   height="500px"
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Html1;
