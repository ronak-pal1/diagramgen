class Rectangle {
  context: CanvasRenderingContext2D;
  initialX: number;
  initialY: number;
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
  color: string;
  isAnimateLeft: boolean;
  isAnimateTop: boolean;

  constructor(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    height: number,
    text: string,
    color: string,
    isAnimateLeft: boolean,
    isAnimateTop: boolean
  ) {
    this.context = context;
    this.initialX = x;
    this.initialY = y;
    this.x = x;
    this.y = y;
    // measureing the text to get the required width
    this.width = context.measureText(text).width + 100;
    this.height = height;
    this.text = text;
    this.color = color;
    this.isAnimateLeft = isAnimateLeft;
    this.isAnimateTop = isAnimateTop;
  }

  draw() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.fillRect(this.x, this.y, this.width, this.height);
    this.context.strokeStyle = "#000000";
    this.context.fillStyle = "#000000";
    this.context.font = "normal normal lighter 17px sans-serif";
    this.context.textAlign = "center";
    this.context.textBaseline = "middle";
    this.context.fillText(
      this.text,
      this.x + this.width / 2,
      this.y + this.height / 2
    );
  }

  connectTo(tx: number, ty: number) {
    // tx - target x , ty - target y
    this.context.beginPath();
    this.context.globalCompositeOperation = "destination-over"; // this is used to draw the connecting lines behind the rectangles

    this.context.lineWidth = 1.5;
    this.context.strokeStyle = "#cccaf0";
    this.context.moveTo(tx, ty);

    this.context.quadraticCurveTo(
      this.x + this.width / 2 + 10,
      this.y - 200,
      this.x + this.width / 2,
      this.y
    );

    this.context.stroke();

    this.context.globalCompositeOperation = "source-over";
  }
}

const originX = (3 * window.innerWidth) / 4;
const originY = 0;
const rectArr: Rectangle[] = [];

const loadAllRect = (ctx: CanvasRenderingContext2D) => {
  rectArr.push(
    new Rectangle(ctx, 700, 400, 80, "AI Powered", "#fdba74", true, false)
  );
  rectArr.push(
    new Rectangle(ctx, 900, 300, 80, "App development", "#d1ffbd", true, true)
  );
  rectArr.push(
    new Rectangle(
      ctx,
      950,
      600,
      80,
      "Diagram Generator",
      "#90d5ff",
      false,
      true
    )
  );

  rectArr.push(
    new Rectangle(
      ctx,
      1200,
      300,
      80,
      "Export it anywhere",
      "#ff8da1",
      false,
      false
    )
  );

  rectArr.push(
    new Rectangle(
      ctx,
      300,
      600,
      80,
      "Generate roadmaps",
      "#fff59e",
      true,
      false
    )
  );
};

let globalContext: CanvasRenderingContext2D;
const range: number = 100;

const animate = (): void => {
  requestAnimationFrame(animate);
  globalContext.clearRect(0, 0, innerWidth, innerHeight);
  rectArr.forEach((rect) => {
    rect.draw();
    rect.connectTo(originX, originY);

    if (rect.isAnimateLeft) rect.x -= 0.5;
    else rect.x += 0.5;

    if (rect.isAnimateTop) rect.y -= 0.5;
    else rect.y += 0.5;

    if (rect.x < rect.initialX - range) rect.isAnimateLeft = false;
    else if (rect.x > rect.initialX + range) rect.isAnimateLeft = true;

    if (rect.y < rect.initialY - range) rect.isAnimateTop = false;
    else if (rect.y > rect.initialY + range) rect.isAnimateTop = true;
  });
};

export const drawBG = (ctx: CanvasRenderingContext2D): void => {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  globalContext = ctx;
  // Loading all the rectangles into the rectArr
  loadAllRect(ctx);

  // Now drawing and c
  rectArr.forEach((rect) => {
    rect.draw();
    rect.connectTo(originX, originY);
  });

  animate();
};
