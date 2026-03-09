import React from "react";
import { Html, useProgress } from "@react-three/drei";

// ===============================
// COMPONENT
// ===============================

const CanvasLoader = () => {
  const { progress } = useProgress();
  const progressValue = progress.toFixed(2);

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">

        <span className="canvas-loader border-accent" />

        <p className="mt-10 text-accent font-extrabold text-sm">
          {progressValue}%
        </p>

      </div>
    </Html>
  );
};

export default React.memo(CanvasLoader);