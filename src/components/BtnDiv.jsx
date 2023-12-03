import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const BtnDiv = () => {
  return (
    <div className="w-[100%] flex flex-col items-center px-6 py-4 md:flex-row md:justify-center md:gap-8">
      <button className="flex active justify-center items-center relative w-full h-14 md:max-w-[13rem] rounded-2xl my-5 bg-[#8247ff] text-white font-bold text-xl hover:transition-all hover:ease-out duration-1000 group hover:shadow-[0px_0px_2px_8px_#e9d8fd]">
        <span className="group-hover:mr-5 transition-all">Get Started</span>
        <span className="mb-1 mr-36 md:mr-1  absolute right-4 hidden group-hover:block object-cover text-white hover:transition-all hover:ease-in-out hover:duration-1000">
          <ArrowCircleRightIcon />
        </span>
      </button>
      <button className="w-full h-14 md:max-w-[13rem] md:my-3 rounded-2xl flex items-center justify-center gap-3  text-black font-semibold text-xl bg-[#fff] border border-[#565654] border-opacity-20 ">
        Watch Demo
        <img
          src="/play-button.png"
          alt="play-button"
          className="w-5 h-5 mt-1"
        />
      </button>
    </div>
  );
};

export default BtnDiv;
