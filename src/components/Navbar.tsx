import logo from "../assets/logo.svg";
// import menuLogo from "../assets/icon-menu.svg";
import "../sass/Navbar.scss";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="logoContainer">
        <img src={logo} alt="logo" />
      </section>
      <section className="menuLogoContainer">
        {/* <img src={menuLogo} alt="menuLogo" /> */}
        <MobileMenu />
      </section>
    </nav>
  );
};

export default Navbar;
