import "./ResourceItem.css";

import { useNavigate } from "react-router-dom";

function redirectToPage(resource, navigate) {
  navigate("/ResourcePage", { state: resource });
}

export default function ResourceItem({ resource }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="resourceItem" onClick={(redirectToPage, navigate)}>
        <div className="resourceItemTitleBox">
          <span className="resourceItemSubtitle">{resource.course.name}</span>
          <span className="resourceItemTitle">{resource.name}</span>
        </div>
        <span className="resourceItemDescription"> {resource.myUser.name}</span>
      </div>
    </>
  );
}
