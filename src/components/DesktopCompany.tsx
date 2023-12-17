import arrowUp from "../assets/icon-arrow-up.svg";
import arrowDown from "../assets/icon-arrow-down.svg";
import "../sass/DesktopCompany.scss";
import { useState } from "react";

const DesktopCompany = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="desktopCompany">
      <span onClick={() => setClicked(!clicked)}>
        Company <img src={clicked ? arrowUp : arrowDown} alt="arrow" />
      </span>
      {clicked && (
        <ul>
          <li>History</li>
          <li>Our Team</li>
          <li>Blog</li>
        </ul>
      )}
    </div>
  );
};

export default DesktopCompany;
