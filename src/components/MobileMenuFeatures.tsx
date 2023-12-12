import { useState } from "react";
import arrowDown from "../assets/icon-arrow-down.svg";
import arrowUp from "../assets/icon-arrow-up.svg";
import calendar from "../assets/icon-calendar.svg";
import planning from "../assets/icon-planning.svg";
import reminders from "../assets/icon-reminders.svg";
import todo from "../assets/icon-todo.svg";
import "../sass/MobileMenuFeature.scss";

const MobileMenuFeatures = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="features">
      <span onClick={() => setClicked(!clicked)}>
        Features <img src={clicked ? arrowUp : arrowDown} alt="arrow" />
      </span>
      {clicked && (
        <ul>
          <li>
            <img src={todo} alt="todo" />
            <span>Todo List</span>
          </li>
          <li>
            <img src={calendar} alt="calendar" />
            <span>Calendar</span>
          </li>
          <li>
            <img src={reminders} alt="reminders" />
            <span>Reminders</span>
          </li>
          <li>
            <img src={planning} alt="planning" />
            <span>Planning</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileMenuFeatures;
