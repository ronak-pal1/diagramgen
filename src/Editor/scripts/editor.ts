import {
  Circle,
  NormalLine,
  Parallelogram,
  Rectangle,
  ShapesTypes,
  SingleArrowLine,
} from "./shapes";

let isMouseDown: boolean = false;
let startX: number = 0;
let startY: number = 0;
let activeObject:
  | Rectangle
  | Circle
  | Parallelogram
  | NormalLine
  | SingleArrowLine;

class CanvasSheet {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D | null;
  objects: (Rectangle | Circle | NormalLine | SingleArrowLine)[];
  backContext: CanvasRenderingContext2D | null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.objects = [];
    this.backContext = null;
  }

  addSheetListener() {
    this.canvas.addEventListener("mousedown", (e: MouseEvent) => {
      isMouseDown = true;
      startX = e.clientX;
      startY = e.clientY;
      console.log("mouse down");

      if (drawableShape == ShapesTypes.Rectangle) {
        const rect = new Rectangle(startX, startY, 0, 0);
        this.objects.push(rect);
        activeObject = rect;
      } else if (drawableShape == ShapesTypes.Circle) {
        const circle = new Circle(0, 0, 0);
        this.objects.push(circle);
        activeObject = circle;
      } else if (drawableShape == ShapesTypes.NormalLine) {
        const normalLine = new NormalLine(startX, startY, startX, startY);
        this.objects.push(normalLine);
        activeObject = normalLine;
      } else if (drawableShape == ShapesTypes.Parallelogram) {
        const parallelogram = new Parallelogram(startX, startY, startX, startY);
        this.objects.push(parallelogram);
        activeObject = parallelogram;
      } else if (drawableShape == ShapesTypes.SingleArrowLine) {
        const singleArrowLine = new SingleArrowLine(
          startX,
          startY,
          startX,
          startY
        );
        this.objects.push(singleArrowLine);
        activeObject = singleArrowLine;
      }
    });

    this.canvas.addEventListener("mousemove", (e: MouseEvent) => {
      if (!isMouseDown) return;

      this.context?.clearRect(0, 0, innerWidth, innerHeight);
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (drawableShape == ShapesTypes.Rectangle) {
        if (!(activeObject instanceof Rectangle)) return;

        activeObject.width = mouseX - activeObject.x;
        activeObject.height = mouseY - activeObject.y;

        if (this.context) activeObject.draw(this.context);
      } else if (drawableShape == ShapesTypes.Circle) {
        if (!(activeObject instanceof Circle)) return;

        activeObject.x = (mouseX - startX) / 2 + startX;
        activeObject.y = (mouseY - startY) / 2 + startY;
        activeObject.radius = mouseX - startX;

        if (this.context) activeObject.draw(this.context);
      } else if (drawableShape == ShapesTypes.Parallelogram) {
        if (!(activeObject instanceof Parallelogram)) return;

        activeObject.x2 = mouseX;
        activeObject.y2 = mouseY;

        if (this.context) activeObject.draw(this.context);
      } else if (drawableShape == ShapesTypes.NormalLine) {
        if (!(activeObject instanceof NormalLine)) return;

        activeObject.x2 = mouseX;
        activeObject.y2 = mouseY;

        if (this.context) activeObject.draw(this.context);
      } else if (drawableShape == ShapesTypes.SingleArrowLine) {
        if (!(activeObject instanceof SingleArrowLine)) return;

        activeObject.x2 = mouseX;
        activeObject.y2 = mouseY;

        if (this.context) activeObject.draw(this.context);
      }
    });

    this.canvas.addEventListener("mouseup", () => {
      isMouseDown = false;

      this.backContext?.clearRect(0, 0, innerWidth, innerHeight);

      this.objects.map((obj) => {
        if (this.backContext) obj.draw(this.backContext);
      });

      drawableShape = null;
      this.canvas.style.cursor = "default";
    });
  }

  connectBack(backCanvas: HTMLCanvasElement) {
    this.backContext = backCanvas.getContext("2d");
  }
}

export const initEditor = (
  frontCanvas: HTMLCanvasElement,
  backCanvas: HTMLCanvasElement
) => {
  const frontCanvasSheet = new CanvasSheet(frontCanvas);

  frontCanvasSheet.addSheetListener();
  frontCanvasSheet.connectBack(backCanvas);
};

let drawableShape: ShapesTypes | null = null;

export const setDrawableShape = (type: ShapesTypes) => {
  drawableShape = type;
};
