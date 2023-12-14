import logo from "../assets/logo.svg";
import menuLogo from "../assets/icon-menu.svg";
import "../sass/Navbar.scss";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import closeMenuLogo from "../assets/icon-close-menu.svg";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="navbar">
      <section className="logoContainer">
        <img src={logo} alt="logo" />
      </section>
      <section className="menuLogoContainer">
        <img
          onClick={() => setClicked(!clicked)}
          src={clicked ? closeMenuLogo : menuLogo}
          alt="logo"
        />
        {clicked && <MobileMenu />}
      </section>
    </nav>
  );
};

export default Navbar;
