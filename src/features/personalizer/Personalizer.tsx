"use client";
import { FC } from "react";
import Canvas from "./components/Canvas";

interface IScene {}

const scenes = Array.from({ length: 3 }, (_, i) => i);

const Personalizer: FC = () => {
  return (
    <div className="w-full h-full flex justify-center pt-5 gap-4">
      {/* <Canvas /> */}
      {scenes.map((scene) => (
        <Canvas key={scene} />
      ))}
    </div>
  );
};

export default Personalizer;
