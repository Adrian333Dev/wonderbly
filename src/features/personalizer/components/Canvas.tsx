import { useEffect, useRef, useState } from "react";
import { Canvas as FabricCanvas } from "fabric";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<FabricCanvas>();

  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new FabricCanvas(canvasRef.current, {
        width: 400,
        height: 500,
        backgroundColor: "#0f172a",
      });
      initCanvas.renderAll();
      setCanvas(initCanvas);
    }
  }, [canvasRef]);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
