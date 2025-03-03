import { useNavigate } from "react-router-dom";

async function deleteResource(resourceID) {}

export default function ResourcePage({ resourceID }) {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <span>TITLE</span>
        <span>THIS IS A RESOURCE</span>
        <a href="">Download</a>
        {navigate("/EditResource", { state: { resourceID } })}
        <button>Delete</button>
      </div>
    </>
  );
}
