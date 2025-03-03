import "./ResourceItem.css";

export default function ResourceItem({title, course, username}) {
  return <>
    <div className="resourceItem">
      <div className="resourceItemTitleBox">
        <span className="resourceItemSubtitle">Course Name</span>
        <span className="resourceItemTitle">Cheese ka naam</span>
      </div>
      <span className="resourceItemDescription">
                Khanki
      </span>
    </div>
    </>;
}
