import React, { useState } from "react";
import { assets } from "../../../utils/assets";
import "./React.css";
import ReactPlayer from "react-player";
import { MdHeight } from "react-icons/md";

const React1 = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const videoPlayer = (key) => {
    if (key === "BUTTON_1") {
      setVideoUrl("https://youtu.be/Y6aYx_KKM7A?si=UwMfZvwAdzkUfrP5");
    } else if (key === "BUTTON_2") {
      setVideoUrl("https://youtu.be/1N_Vh0bRK3c?si=XMVtsUPCEdsOwoOS");
    } else if (key === "BUTTON_3") {
      setVideoUrl("https://youtu.be/SS1I7m-G2kk?si=4umcI412mxew6479");
    }
  };
  return (
    <div>
      <div style={{ border: "solid 2px ", width: "100vw" }}>
        <div style={{ border: "solid 2px " }} className="Name">
          <nav className="home-nav-r">
            <img src={assets.LOGO} alt="Logo" className="intro-logo" />
          </nav>
        </div>
        <div className="row">
          <div className="col-md-2">
            <button onClick={() => videoPlayer("BUTTON_1")}>
              Introduction to React
            </button>
            <button onClick={() => videoPlayer("BUTTON_2")}>
              Routing in React
            </button>
            <button onClick={() => videoPlayer("BUTTON_3")}>
              Hooks in React{" "}
            </button>
          </div>
          <div className="col-md-10">
            <h1>REACT</h1>
            <div className="inter_video">
              {videoUrl && (
                <ReactPlayer
                  url={videoUrl}
                  controls={true}
                  width="1000px"
                  height="500px"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React1;
