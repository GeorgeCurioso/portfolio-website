import React from "react";
import { Html, useProgress } from "@react-three/drei";

// ===============================
// STYLES
// ===============================

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const textStyle = {
  fontSize: 14,
  color: "#F1F1F1",
  fontWeight: 800,
  marginTop: 40,
};

// ===============================
// COMPONENT
// ===============================

const CanvasLoader = () => {
  const { progress } = useProgress();
  const progressValue = progress.toFixed(2);

  return (
    <Html as="div" center style={containerStyle}>
      <span className="canvas-loader" />

      <p style={textStyle}>
        {progressValue}%
      </p>
    </Html>
  );
};

export default React.memo(CanvasLoader);