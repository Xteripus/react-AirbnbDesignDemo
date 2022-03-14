import React from "react";
import Logo from "../assets/images/Vector.png";
function Navbar() {
  return (
    <nav className="py-5 px-8 shadow-md rounded-t-xl">
      <a href="#" className="">
        <img src={Logo} alt="" />
      </a>
    </nav>
  );
}

export default Navbar;
