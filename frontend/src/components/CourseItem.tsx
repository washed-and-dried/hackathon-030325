import "./CourseItem.css";

export default function CourseItem() {
  return (
    <div className="courseItem">
      <div className="courseItemTitleBox">
        <span className="courseItemSubtitle">Not Name</span>
        <span className="courseItemTitle">Name</span>
      </div>
      <span className="courseItemDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lacinia
        velit, eu iaculis urna. Lorem ipsum dolor sit amet, consectetur.
      </span>
    </div>
  );
}
