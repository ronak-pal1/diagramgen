import { useEffect, useRef } from "react";
import { drawBG } from "../bgCanvas";
import EditorImage from "../assets/test-editor-img.jpg";

const Homepage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    const context = canvas.getContext("2d");

    context?.clearRect(0, 0, innerWidth, innerHeight);

    if (context) drawBG(context);

    const winResize = () => {
      if (!canvas) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      if (context) drawBG(context);
    };

    window.addEventListener("resize", winResize);

    return () => {
      window.removeEventListener("resize", winResize);
    };
  }, []);

  return (
    <>
      {/* header section from layout */}
      {/* Hero section */}
      <div className="flex flex-1 items-center h-screen">
        <canvas
          className="w-full h-full absolute top-0 left-0  -z-10 bg-white"
          ref={canvasRef}
        ></canvas>

        <div className="flex w-1/2 justify-center items-center h-full p-8">
          <div>
            <h1 className="text-5xl py-3 bg-gradient-to-bl from-orange-400 to-blue-800 bg-clip-text text-transparent leading-normal">
              AI Powered Diagram generator and whiteboard
            </h1>
            <p className="mt-7 text-2xl font-light">
              Just write a prompt and get your diagram ready! Also customize it
              if you didn't liked it
            </p>
            <button className="px-10 py-2 bg-orange-400 mt-12 rounded-3xl transition hover:scale-110">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className="relative">
        <svg className="absolute  -z-10" width="100%" height="100%">
          <rect x="248" y="690" width="355" height="69" fill="#8FFE35" />
          <rect x="1196" y="570" width="244" height="191" fill="#F03167" />
          <ellipse cx="1111.5" cy="675" rx="84.5" ry="80" fill="#29FFB1" />
          <rect
            x="1165.65"
            y="476"
            width="21"
            height="387"
            transform="rotate(45 1165.65 476)"
            fill="#FDF191"
          />

          <g className="opacity-55">
            <path
              d="M367.452 513.981C377.392 523.92 385.14 537.039 382.046 551.775C378.234 569.935 343.88 598.651 356.039 618.197C363.375 629.99 384.388 628.274 395.892 628.488C409.663 628.744 423.466 628.488 437.241 628.488C449.785 628.488 450.9 627.929 451.648 639.901C452.532 654.048 477.538 654.075 487.385 655.805C496.725 657.445 502.214 659.209 509.837 662.914C536.278 675.768 569.318 668.779 594.782 684.057"
              stroke="#915EF0"
              fill="white"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M106.444 561.131C143.998 565.303 180.152 571.211 218.331 569.737C257.291 568.234 293.367 558.79 330.219 546.537C416.013 518.009 502.145 486.889 583.93 448.214C667.495 408.698 748.833 362.757 825.292 310.787C884.474 270.561 944.534 226.444 996.678 177.196C1015.47 159.445 1075.14 103.037 1042.05 72.8865C1022.94 55.473 991.348 50.6476 966.929 47.6276C921.758 42.0412 871.86 42.1945 827.537 53.5214C770.509 68.0953 705.172 115.424 705.172 180.19C705.172 202.816 716.44 217.889 735.296 229.772C781.636 258.976 843.292 259.826 896.204 259.896C944.637 259.959 989.322 247.852 1034.85 232.953C1047.57 228.787 1057.25 225.761 1067.68 216.862C1069.43 215.368 1080.44 206.474 1075.64 204.139C1050.88 192.114 1022.93 207.996 1010.34 229.585C1001.31 245.054 995.247 271.253 1003.79 288.335C1008.74 298.244 1018.51 305.144 1027.36 311.255C1052.56 328.659 1080.76 344.094 1110.25 352.698C1241.44 390.981 1379.71 346.269 1503.26 302.742C1531.69 292.724 1560.48 282.859 1588.39 271.402C1593.53 269.29 1597.69 267.869 1600.08 263.076"
              stroke="#915EF0"
              fill="white"
              stroke-width="3"
              stroke-linecap="round"
            />
          </g>
        </svg>
        <div className="w-full h-screen flex flex-1 items-center px-12 ">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <p className="text-5xl leading-normal">
              Get all the things to make up your diagram
            </p>

            <p className="text-2xl mt-7 font-light">
              From different shapes, cloud services logo's, arrows and you tell
              we add 🔥
            </p>
          </div>
        </div>
      </div>

      {/* Third section */}
      <div className="w-full h-screen flex items-center justify-center my-32">
        <div className="w-2/3 flex flex-col items-center justify-center">
          <div className="w-fit my-20">
            <p className="text-5xl">Seamless Editor Experiance</p>
          </div>
          <img src={EditorImage} alt="Editor demo image" />
        </div>
      </div>

      {/* Footer section from layout */}
    </>
  );
};

export default Homepage;
