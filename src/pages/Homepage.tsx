import { useEffect, useRef } from "react";
import Header from "../components/Header";

const Homepage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {}, []);

  return (
    <>
      <Header />

      {/* Hero section */}

      <div className="flex flex-1 items-center h-screen">
        <canvas
          className="w-full h-full absolute top-0 left-0  -z-10"
          ref={canvasRef}
        ></canvas>

        <div className="flex w-1/2 justify-center items-center h-full p-8">
          <div>
            <h1 className="text-5xl py-3 bg-gradient-to-bl from-orange-400 to-blue-800 bg-clip-text text-transparent">
              AI Powered Diagram generator
            </h1>
            <p className="mt-7 text-2xl font-light">
              Just write a prompt and get your diagram ready! Also customize it
              if you didn't liked it
            </p>
            <button className="px-10 py-2 bg-orange-300 mt-12 rounded-3xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
