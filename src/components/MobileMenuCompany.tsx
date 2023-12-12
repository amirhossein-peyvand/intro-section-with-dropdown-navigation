import { useState } from "react";
import arrowDown from "../assets/icon-arrow-down.svg";
import arrowUp from "../assets/icon-arrow-up.svg";
import "../sass/MobileMenuCompany.scss";

const MobileMenuCompany = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="company">
      <span onClick={() => setClicked(!clicked)}>
        Company <img src={clicked ? arrowUp : arrowDown} alt="" />
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

export default MobileMenuCompany;
