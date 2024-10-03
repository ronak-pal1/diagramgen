const PlanBox = () => {
  return (
    <div className="w-1/3 h-fit bg-white mt-56 rounded-lg shadow-lg px-5 py-6">
      <h1 className="text-4xl mb-3">Free</h1>
      <p> $0 Per Month</p>
      <div className="flex justify-center items-center my-7">
        <button className="bg-orange-300 px-5 py-3 outline-none text-sm rounded-md">
          Start for free
        </button>
      </div>

      <hr className="my-5" />

      <ul className="list-disc mx-5 space-y-3 font-light text-sm">
        <li>Access to all rich editor</li>
        <li>Access to various tools</li>
        <li>Get several templates</li>
        <li>AI based diagram maker</li>
      </ul>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="h-screen">
      <div className="w-full h-96 bg-orange-300">
        <div className="w-full flex justify-center items-center">
          <PlanBox />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
