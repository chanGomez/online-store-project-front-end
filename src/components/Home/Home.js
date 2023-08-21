import React from "react";
import "./Home.css";
import video from "../../assets/vinylVideo.mp4";

function Home() {
  return (
    <div className="contain">
      <video src={video} autoPlay loop muted/>
      <div className="home-heading">
        <h1>Welcome to ARTICLE.</h1>
        <p> Online store for vintage clothing</p>
      </div>
    </div>
  );
}

export default Home;
