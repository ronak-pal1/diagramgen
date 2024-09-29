const Header = () => {
  return (
    <header className="w-full h-24 flex flex-1 justify-evenly items-center border-b-2 border-b-pink-200 sticky top-0 left-0 z-50 backdrop-blur-md ">
      <div className="w-fit justify-start">
        <p className="text-3xl font-semibold text-orange-500">DiagramGen</p>
      </div>

      <div className="flex flex-[0.3] items-center justify-evenly">
        <p>How to use?</p>
        <p>Pricing</p>
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
