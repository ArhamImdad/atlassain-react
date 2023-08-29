import React from "react";
import Items from "../Image";
import "../components/Rw4.css";

const Rw4 = () => {
  const fadeInUpStyles = {
    animationDuration: "1s",
    animationFillMode: "both",
    WebkitAnimationDuration: "1s",
    WebkitAnimationFillMode: "both",
    opacity: 0,
    animationName: "fadeInUp",
    WebkitAnimationName: "fadeInUp",
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <img src={Items.background10} style={fadeInUpStyles} />
      </div>
      <div style={fadeInUpStyles}>Content with fadeInUp animation</div>
    </div>
  );
};

export default Rw4;
