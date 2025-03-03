import CourseItem from "./CourseItem";
import "./Courses.css";
import ResourceItem from "./ResourceItem";

export default function Courses() {
  return (
    <>
      <div className="main">
        <div className="middle-layout">
          <CourseItem />
          <ResourceItem /> {/*FIXME: pass state, {title, course, username}*/}
        </div>
      </div>
    </>
  );
}
