import { Circle, FabricObject, Group, Rect } from "fabric";

export class BaseBody {
  head: FabricObject;
  torso: FabricObject;
  leftArm: FabricObject;
  rightArm: FabricObject;
  leftLeg: FabricObject;
  rightLeg: FabricObject;
  group: Group;

  constructor(color: string) {
    // Define basic body shapes with a shared color
    this.head = new Circle({ radius: 30, fill: color });
    this.torso = new Rect({ width: 50, height: 100, fill: color });
    this.leftArm = new Rect({ width: 20, height: 60, fill: color });
    this.rightArm = new Rect({ width: 20, height: 60, fill: color });
    this.leftLeg = new Rect({ width: 20, height: 80, fill: color });
    this.rightLeg = new Rect({ width: 20, height: 80, fill: color });

    // Group the parts together
    this.group = new Group([
      this.head,
      this.torso,
      this.leftArm,
      this.rightArm,
      this.leftLeg,
      this.rightLeg,
    ]);

    // Position the body parts relative to each other
    this._arrangeParts();
  }

  private _arrangeParts() {
    // Position parts relative to the torso
    this.head.set({ top: -70, left: 15 });
    this.leftArm.set({ top: -50, left: -30 });
    this.rightArm.set({ top: -50, left: 60 });
    this.leftLeg.set({ top: 100, left: -10 });
    this.rightLeg.set({ top: 100, left: 40 });

    // this.group._calcBounds(); // Recalculate bounds after positioning
  }

  updateColor(color: string) {
    // Update the fill color for all parts
    [
      this.head,
      this.torso,
      this.leftArm,
      this.rightArm,
      this.leftLeg,
      this.rightLeg,
    ].forEach((part) => {
      part.set("fill", color);
    });
  }

  setPosition(left: number, top: number) {
    // Update the position of the entire group
    this.group.set({ left, top });
  }
}
export class Character {}
