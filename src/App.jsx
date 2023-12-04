import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HamburgerToggle from "./components/HamburgerToggle";

function App() {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  return (
    <div>
      {toggle ? (
        <HamburgerToggle handleToggle={handleToggle} />
      ) : (
        <div className="bg-[#fdf2ec]  min-h-[120vh] md:min-h-screen">
          <Navbar handleToggle={handleToggle} />
          <Hero />
        </div>
      )}
    </div>
  );
}

export default App;
