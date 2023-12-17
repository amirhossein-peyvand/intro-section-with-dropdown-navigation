import "../sass/DesktopFeature.scss";
import todoIcon from "../assets/icon-todo.svg";
import calendarIcon from "../assets/icon-calendar.svg";
import remindersIcon from "../assets/icon-reminders.svg";
import planningIcon from "../assets/icon-planning.svg";
import arrowDown from "../assets/icon-arrow-down.svg";
import arrowUp from "../assets/icon-arrow-up.svg";
import { useState } from "react";

const DesktopFeature = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="desktopFeature">
      <span onClick={() => setClicked(!clicked)}>
        Feature <img src={clicked ? arrowUp : arrowDown} alt="arrow" />
      </span>
      {clicked && (
        <ul>
          <li>
            <img src={todoIcon} alt="todoIcon" />
            <span>Todo List</span>
          </li>
          <li>
            <img src={calendarIcon} alt="calendarIcon" />
            <span>Calendar</span>
          </li>
          <li>
            <img src={remindersIcon} alt="remindersIcon" />
            <span>Reminders</span>
          </li>
          <li>
            <img src={planningIcon} alt="planningIcon" />
            <span>Planning</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DesktopFeature;
