import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-24 flex flex-1 justify-evenly items-center border-b-2 border-b-pink-200 sticky top-0 left-0 z-50 backdrop-blur-md ">
      <div className="flex w-fit justify-start">
        <Link to={"/"} className="text-3xl font-semibold text-orange-500">
          DiagramGen
        </Link>
        <p className="text-xs text-slate-600">beta</p>
      </div>

      <div className="flex flex-[0.3] items-center justify-evenly [&>a]:cursor-pointer">
        <p>How to use?</p>
        <Link to={"/pricing"}>Pricing</Link>
        <p>About</p>
      </div>

      <div className="flex justify-evenly items-center">
        <button className="px-7 py-2 bg-orange-300 mx-2">Login</button>
        <button className="px-7 py-2 bg-black text-white">Signup</button>
      </div>
    </header>
  );
};

export default Header;
