const Menu = ({ handleToggle }) => {
  return (
    <div>
      <img
        src="/menu.png"
        className="w-6 h-7 md:hidden cursor-pointer"
        onClick={handleToggle}
      />
      <div className="hidden md:flex">
        <div className="font-semibold text-base flex items-center justify-center gap-6">
          <div className="hover:text-[#8247ff] hover:cursor-pointer">
            Features
          </div>
          <div className="w-1 h-1 bg-slate-300"></div>
          <div className="hover:text-[#8247ff] hover:cursor-pointer">FAQ</div>
          <div className="w-1 h-1 bg-slate-300"></div>
          <div className="hover:text-[#8247ff] hover:cursor-pointer">
            Pricing
          </div>
          <div className="w-1 h-1 bg-slate-300"></div>
          <div className="hover:text-[#8247ff] hover:cursor-pointer">
            Testimonials
          </div>
          <div className="bg-white py-3 px-4 rounded-xl font-bold hover:cursor-pointer hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            Buy Templates
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
