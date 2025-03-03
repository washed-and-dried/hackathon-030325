import CourseItem from "./CourseItem";
import "./Courses.css";

async function listCourses(uid) {
  const url = `http://localhost:4000/user/courses/${uid}`;
  const res = await fetch(url, {
    method: "GET",
  });

  const data = await res.json();

  return data.map((d) => {
    return <CourseItem courseInfo={d} />;
  });
}

export default function Courses() {
  return (
    <>
      <div className="main">
        <div className="middle-layout">{listCourses(uid)}</div>
      </div>
    </>
  );
}
