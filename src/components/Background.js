import React from "react";
import "../css/StarBackground.css";

const BlobBackground = (props) => {
  return (
    <section className="wrapper">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      {props.istarEnabled && (
        <div
          className="interactive"
          style={{
            transform: `translate(${props.starCurrXY.x}px, ${props.starCurrXY.y}px)`,
            opacity: props.opacity || 0.10,
          }}
        ></div>
      )}
    </section>
  );
};

export default BlobBackground;
