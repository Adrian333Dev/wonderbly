"use client";
import { FC, useEffect, useRef, useState } from "react";
import { Canvas as FabricCanvas } from "fabric";

import { defaultCanvasStyles } from "../constants";
import { Character } from "../core/core";

const Canvas: FC<{ character: Character }> = ({ character }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<FabricCanvas>();

  // useEffect(() => {
  //   if (canvasRef.current) {
  //     const initCanvas = new FabricCanvas(
  //       canvasRef.current,
  //       defaultCanvasStyles
  //     );
  //     setCanvas(initCanvas);
  //     initCanvas.add(character);

  //     initCanvas.renderAll();
  //   }

  //   return () => {
  //     canvas?.dispose();
  //   };
  // }, [canvasRef]);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = new FabricCanvas(canvasRef.current, defaultCanvasStyles);
      setCanvas(canvas);
      canvas.add(character);

      canvas.renderAll();
    }

    return () => {
      canvas?.dispose();
    };
  }, [canvasRef, setCanvas]);

  return <canvas className="border" ref={canvasRef} />;
};

export default Canvas;
