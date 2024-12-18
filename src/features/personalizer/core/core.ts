import { Circle, CircleProps, FabricObject, Group, Rect } from "fabric";

export class Head extends Circle {
  constructor(props: Partial<CircleProps>) {
    super({ ...props });
  }
}

export class BaseBody extends Group {
  constructor(head: Head) {
    super([head]);
  }
}

export class Character extends Group {
  characterId: string;
  sceneId: string;
  baseBody: BaseBody;

  constructor(characterId: string, sceneId: string, baseBody: BaseBody) {
    super([baseBody]);
    this.characterId = characterId;
    this.sceneId = sceneId;
    this.baseBody = baseBody;
  }

  updateBaseBody(baseBody: BaseBody) {
    this.baseBody = baseBody;
  }
}

const head = new Head({ fill: "#faedcd", radius: 60 });
const baseBody = new BaseBody(head);
export const character1 = new Character("character1", "scene1", baseBody);
