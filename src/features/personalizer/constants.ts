import { CanvasOptions, TOptions } from 'fabric';

export type TCanvasOptions = TOptions<CanvasOptions>;

export const defaultCanvasStyles: TCanvasOptions = {
  width: 400,
  height: 500,
  backgroundColor: "#0f172a",
};
