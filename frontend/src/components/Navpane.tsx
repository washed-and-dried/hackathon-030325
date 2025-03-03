import "./Navpane.css";
import tasksvg from "./svgs/task.svg";
import homesvg from "./svgs/home.svg";
import { NavLink } from "react-router-dom";

export default function Navpane() {
  return (
    <div className="lay-out">
      <div className="rennala-box">
        <span className="rennala">RennalaLib</span>
      </div>
      <div className="top-box">
        <div className="top-box-css1">
          <img src={homesvg}></img>
          <span className="top-box-text">
            <NavLink to={"/"}>Home</NavLink>
          </span>
        </div>
        <div className="top-box-css1">
          <img src={tasksvg}></img>
          <span className="top-box-text">
            <NavLink to={"/courses"}>Courses</NavLink>
          </span>
        </div>
        <div className="top-box-css1">
          <img src={tasksvg}></img>
          <span className="top-box-text">
            <NavLink to={"/addCourses"}>Add Courses</NavLink>
          </span>
        </div>
      </div>

      <div className="huh"></div>

      <div className="bottom-box">
        <div className="bottom-box-individual">
          <img src={tasksvg}></img>
          <span className="bottom-box-text">info</span>
        </div>
        <div className="bottom-box-individual">
          <img src={tasksvg}></img>
          <span className="bottom-box-text">support</span>
        </div>
      </div>
    </div>
  );
}
