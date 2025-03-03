import "./ResourceItem.css";

export default function ResourceItem({resource}) {
  return <>
    <div className="resourceItem">
      <div className="resourceItemTitleBox">
        <span className="resourceItemSubtitle">{resource.course.name}</span>
        <span className="resourceItemTitle">{resource.name}</span>
      </div>
      <span className="resourceItemDescription"> {resource.myUser.name}
      </span>
    </div>
    </>;
}
