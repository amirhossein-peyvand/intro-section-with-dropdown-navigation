import { useState } from "react";
import menu from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg";
import "../sass/Navbar.scss";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="navbar">
      <section className="logoContainer">
        <img src={logo} alt="logo" />
      </section>
      <section className="menuLogoContainer">
        {!clicked && (
          <img src={menu} alt="menu" onClick={() => setClicked(true)} />
        )}
      </section>
      {clicked && <MobileMenu onSetClicked={() => setClicked(false)} />}
    </nav>
  );
};

export default Navbar;
