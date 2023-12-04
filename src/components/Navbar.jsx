import PropTypes from "prop-types";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = ({ handleToggle }) => {
  return (
    <div className="h-[76px] px-5 py-4 flex items-center justify-between border-b-2 border-[#f8ede7]">
      <Logo />
      <Menu handleToggle={handleToggle} />
    </div>
  );
};

Navbar.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default Navbar;
