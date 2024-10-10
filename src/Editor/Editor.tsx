import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import ZoomOutMapOutlinedIcon from "@mui/icons-material/ZoomOutMapOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import { initEditor, setDrawableShape } from "./scripts/editor";
import { ShapesTypes } from "./scripts/shapes";

const Editor = () => {
  const frontCRef = useRef<HTMLCanvasElement>(null);
  const backCRef = useRef<HTMLCanvasElement>(null);
  const backTempCRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const frontCanvas = frontCRef.current;
    const backCanvas = backCRef.current;
    const backTempCanvas = backTempCRef.current;

    if (!(frontCanvas && backCanvas && backTempCanvas)) {
      return;
    }

    frontCanvas.width = innerWidth;
    frontCanvas.height = innerHeight;

    backCanvas.width = innerWidth;
    backCanvas.height = innerHeight;

    backTempCanvas.width = innerWidth;
    backTempCanvas.height = innerHeight;

    initEditor(frontCanvas, backCanvas);
  }, []);

  const selectTool = (type: ShapesTypes) => {
    if (frontCRef.current) frontCRef.current.style.cursor = "move";

    setDrawableShape(type);
  };

  return (
    <div>
      {/* Editor header */}
      <div className="px-4 py-4 absolute top-0 left-0 w-full flex justify-between items-center z-50">
        <div className="flex items-center">
          <Link to={"/"} className="text-2xl text-orange-700">
            DiagramGen
          </Link>

          <div className="flex items-center ml-4">
            <CloudOutlinedIcon fontSize="small" className="text-slate-500" />
            <p className="ml-2 text-xs text-slate-500">Saved Changes</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <ZoomOutMapOutlinedIcon className=" text-orange-900 cursor-pointer" />
          <button className="bg-orange-300 px-4 py-2 text-xs rounded-md">
            Export
          </button>

          <SettingsOutlinedIcon className="text-orange-900 cursor-pointer" />
        </div>
      </div>

      {/* All the canvases */}
      <div className="relative">
        <canvas
          ref={frontCRef}
          className="absolute top-0 left-0  z-30 bg-transparent"
        />

        <canvas
          ref={backCRef}
          className="absolute top-0 left-0  z-20 bg-transparent"
        />

        <canvas ref={backTempCRef} className="absolute top-0 left-0 z-10" />
      </div>

      {/* tools section */}
      <div className="flex justify-center">
        <div className="w-3/4 py-1  px-5 border border-slate-400 absolute bottom-5 rounded-[10px] z-50 bg-white flex items-center justify-center space-x-4 shadow-md shadow-orange-100">
          <div
            className="cursor-pointer"
            onClick={() => selectTool(ShapesTypes.Rectangle)}
          >
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <rect
                width="20"
                height="20"
                rx="3"
                ry="3"
                fill="none"
                stroke="black"
                strokeWidth="3"
              />
            </svg>
          </div>

          <div
            className="cursor-pointer"
            onClick={() => selectTool(ShapesTypes.Circle)}
          >
            <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="black"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <div
            className="cursor-pointer"
            onClick={() => selectTool(ShapesTypes.Parallelogram)}
          >
            <svg
              width="40"
              height="20"
              viewBox="0 0 40 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                points="0,0 30,0 40,20 10,20"
                fill="none"
                stroke="black"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <div
            className="cursor-pointer"
            onClick={() => selectTool(ShapesTypes.NormalLine)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="20"
                x2="20"
                y2="0"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div
            className="cursor-pointer"
            onClick={() => selectTool(ShapesTypes.SingleArrowLine)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="2"
                y1="18"
                x2="18"
                y2="2"
                stroke="black"
                strokeWidth="2"
              />
              <polygon points="7,1 18,2 19,14" fill="black" />
            </svg>
          </div>
        </div>
      </div>

      {/* shortcuts list buttons */}

      <AutoStoriesOutlinedIcon className="absolute bottom-0 right-0 z-50 mx-6 my-3 text-orange-900 cursor-pointer" />
    </div>
  );
};

export default Editor;
