/*
    shapes.ts contains all the shapes classes and methods that you can use in the editor to draw that particular shape
    
    Shapes included:
    Rectangle,
    Circle,
    parallelogram
    NormalLine,
    SingleArrowLine,
    MultiArrowLine,
    CurvedLine,

*/

// This are the types of shapes
export enum ShapesTypes {
  Rectangle = "RECTANGLE",
  Circle = "CIRCLE",
  Parallelogram = "PARALLELOGRAM",
  NormalLine = "NORMALLINE",
}

export class Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
  }
}

export class Circle {
  x: number;
  y: number;
  radius: number;

  constructor(x: number, y: number, radius: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    ctx.stroke();
  }
}

export class Parallelogram {
  x1: number;
  y1: number;
  x2: number;
  y2: number;

  constructor(x1: number, y1: number, x2: number, y2: number) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
  }
}

export class NormalLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;

  constructor(x1: number, y1: number, x2: number, y2: number) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();

    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);

    ctx.stroke();
  }
}
