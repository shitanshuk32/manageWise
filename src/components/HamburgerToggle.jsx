import PropTypes from "prop-types";
import Logo from "./Logo";

const HamburgerToggle = ({ handleToggle }) => {
  return (
    <div className="h-screen px-5 py-4 bg-white transition-all duration-500 md:hidden">
      <div className="flex justify-between items-center">
        <Logo />
        <img
          src="/close.png"
          alt="close"
          className="w-6 h-7 md:hidden cursor-pointer"
          onClick={handleToggle}
        />
      </div>

      <div className="h-[100%] pt-14">
        <div className="font-medium font-Inter text-base h-[100%] flex flex-col gap-10 items-center">
          <div className="hover:text-[#8247ff] hover:cursor-pointer">
            Features
          </div>

          <div className="hover:text-[#8247ff] hover:cursor-pointer">FAQ</div>

          <div className="hover:text-[#8247ff] hover:cursor-pointer">
            Pricing
          </div>

          <div className="hover:text-[#8247ff] hover:cursor-pointer">
            Testimonials
          </div>
          <button className="w-full h-12 md:max-w-[13rem] rounded-xl my-3 bg-[#8247ff] text-white font-medium font-Outfit text-xl hover:transition-all hover:ease-out duration-1000 group hover:shadow-[0px_0px_2px_8px_#e9d8fd]">
            By Template
          </button>
        </div>
      </div>
    </div>
  );
};

HamburgerToggle.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default HamburgerToggle;
