import "./CourseItem.css";

export default function CourseItem({courseInfo}) {
  return (
    <div className="courseItem">
      <div className="courseItemTitleBox">
        <span className="courseItemSubtitle">{courseInfo.id}</span>
        <span className="courseItemTitle">{courseInfo.name}</span>
      </div>
      <span className="courseItemDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lacinia
        velit, eu iaculis urna. Lorem ipsum dolor sit amet, consectetur.
      </span>
    </div>
  );
}
