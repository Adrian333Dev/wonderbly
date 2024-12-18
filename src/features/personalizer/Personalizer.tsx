"use client";
import { FC, useEffect } from "react";
import Canvas from "./components/Canvas";
import { character1 } from "./core/core";

interface IScene {
  sceneId: string;
}

const scenes: IScene[] = Array.from({ length: 1 }, (_, i) => {
  return {
    sceneId: `scene${i + 1}`,
  };
});

const Personalizer: FC = () => {
  useEffect(() => {
    
  })
  return (
    <div className="w-full h-full flex justify-center pt-5 gap-4">
      {/* <Canvas /> */}
      {scenes.map((scene) => (
        <Canvas key={scene.sceneId} character={character1} />
      ))}
    </div>
  );
};

export default Personalizer;
