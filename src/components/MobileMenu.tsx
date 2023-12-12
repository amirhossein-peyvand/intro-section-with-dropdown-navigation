import closeMenuLogo from "../assets/icon-close-menu.svg";
import "../sass/MobileMenu.scss";
import MobileMenuCompany from "./MobileMenuCompany";
import MobileMenuFeatures from "./MobileMenuFeatures";

const MobileMenu = () => {
  return (
    <aside className="mobileMenu">
      <section className="logoContainer">
        <img src={closeMenuLogo} alt="closeMenuLogo" />
      </section>
      <ul className="items">
        <li>
          <MobileMenuFeatures />
        </li>
        <li>
          <MobileMenuCompany />
        </li>
        <li className="careers">Careers</li>
        <li className="about">About</li>
      </ul>
    </aside>
  );
};

export default MobileMenu;
