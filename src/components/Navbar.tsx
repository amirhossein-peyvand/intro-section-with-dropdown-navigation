import { useState } from "react";
import menu from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg";
import "../sass/Navbar.scss";
import MobileMenu from "./MobileMenu";
import { useMediaQuery } from "react-responsive";
import DesktopNavItems from "./DesktopNavItems";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const isGreaterThan800px = useMediaQuery({ query: "(min-width:800px)" });

  const menuLogoContainer = (
    <section className="menuLogoContainer">
      {!clicked && (
        <img src={menu} alt="menu" onClick={() => setClicked(true)} />
      )}
      {clicked && <MobileMenu onSetClicked={() => setClicked(false)} />}
    </section>
  );

  return (
    <nav className="navbar">
      <section className="logoContainer">
        <img src={logo} alt="logo" />
      </section>
      {isGreaterThan800px ? <DesktopNavItems /> : menuLogoContainer}
    </nav>
  );
};

export default Navbar;
