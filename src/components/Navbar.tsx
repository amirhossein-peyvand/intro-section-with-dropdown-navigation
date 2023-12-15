import logo from "../assets/logo.svg";
import menuLogo from "../assets/icon-menu.svg";
import "../sass/Navbar.scss";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="navbar">
      <section className="mainLogoContainer">
        <img src={logo} alt="logo" />
      </section>
      <section className="menuLogoContainer">
        {!clicked && (
          <img src={menuLogo} alt="menuLogo" onClick={() => setClicked(true)} />
        )}
      </section>
      {clicked && <MobileMenu onSetClicked={() => setClicked(false)} />}
    </nav>
  );
};

export default Navbar;
