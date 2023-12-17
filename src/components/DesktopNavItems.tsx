import "../sass/DesktopNavItems.scss";
import DesktopCompany from "./DesktopCompany";
import DesktopFeature from "./DesktopFeature";

const DesktopNavItems = () => {
  return (
    <section className="desktopNavItems">
      <ul>
        <li>
          <DesktopFeature />
        </li>
        <li>
          <DesktopCompany />
        </li>
        <li className="careers">Careers</li>
        <li className="about">About</li>
      </ul>
      <div>
        <span>Login</span>
        <button className="registerBtn">Register</button>
      </div>
    </section>
  );
};

export default DesktopNavItems;
