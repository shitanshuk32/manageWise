const Content = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-[70px]">
      <div className="flex items-center justify-center h-7 px-3 bg-white rounded-lg border border-purple-700 border-opacity-20">
        <span className="flex items-center justify-center gap-1 uppercase text-[#8247ff] font-semibold text-xs">
          <span className="text-xl pb-1">👋</span>
          <span className="font-Outfit tracking-wide">
            Welcome to Manage Wise!
          </span>
        </span>
      </div>

      <div className="mt-4 text-center">
        <h1 className="text-6xl tracking-tight md:text-7xl lg:text-[80px] font-Outfit font-medium mb-4">
          Empower your business with
          <span className="text-[#fe8162]"> Strategic</span> insights
        </h1>
      </div>

      <div className="text-center m-2 md:w-[70%]">
        <p className="text-[#969393] text-lg font-semibold md:text-xl">
          Powerful management platform designed to streamline your business
          operations, boost productivity, and drive success
        </p>
      </div>
    </div>
  );
};

export default Content;
