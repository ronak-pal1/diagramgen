import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import ZoomOutMapOutlinedIcon from "@mui/icons-material/ZoomOutMapOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";

const Editor = () => {
  const frontCRef = useRef<HTMLCanvasElement>(null);
  const backCRef = useRef<HTMLCanvasElement>(null);
  const backTempCRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const frontCanvas = frontCRef.current;
    const backCanvas = backCRef.current;
    const backTempCanvas = backTempCRef.current;

    if (frontCanvas) {
      frontCanvas.width = innerWidth;
      frontCanvas.height = innerHeight;
    }

    if (backCanvas) {
      backCanvas.width = innerWidth;
      backCanvas.height = innerHeight;
    }

    if (backTempCanvas) {
      backTempCanvas.width = innerWidth;
      backTempCanvas.height = innerHeight;
    }
  }, []);

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
        <canvas ref={frontCRef} className="absolute top-0 left-0  z-30" />

        <canvas ref={backCRef} className="absolute top-0 left-0  z-20" />

        <canvas ref={backTempCRef} className="" />
      </div>

      {/* tools section */}
      <div className="flex justify-center">
        <div className="w-3/4 h-24 shadow-2xl shadow-slate-500 border border-slate-100 absolute bottom-0 rounded-t-[50px] z-50 bg-white"></div>
      </div>

      {/* shortcuts list buttons */}

      <AutoStoriesOutlinedIcon className="absolute bottom-0 right-0 z-50 mx-6 my-3 text-orange-900 cursor-pointer" />
    </div>
  );
};

export default Editor;
