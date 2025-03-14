import "./Home.css";
import { useLocation, useNavigate } from "react-router-dom";
import ResourceItem from "./ResourceItem";
import { useQuery } from "@tanstack/react-query";
import CourseItem from "./CourseItem";

async function listResources() {
    const url = "http://localhost:4000/item/all";
        const res = await fetch(url, {
            method: 'GET',
        });

    const data = await res.json();

    return data.map(d => {
        return <ResourceItem resource={d}/>
    })
}

async function listCourses() {
    const url = "http://localhost:4000/course/all";
        const res = await fetch(url, {
            method: 'GET',
        });

    const data = await res.json();

    return data.map(d => {
        return <CourseItem courseInfo={d}/>
    })
}

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = location.state?.user;
  console.log(currentUser);
  if (currentUser === null || currentUser === undefined) {
    navigate("/login");
  }

  const items = useQuery({
        queryKey: ["items"],
        queryFn: listResources,
    })

  const courses = useQuery({
        queryKey: ["courses"],
        queryFn: listCourses,
    })

  return (
    <>
      <div className="main">
        <div className="middle-layout">
          <div className="homeTopBox">
            <span className="homeLeft">Good Morning, Soham Maroti</span>
            <div className="homeRight">
              <div className="homeSearchBox">
                <input
                  type="text"
                  className="homeSearchInput"
                  placeholder="Search..."
                />
                <button className="homeSearchButton">
                  <svg
                    className="homeSearchIcon"
                    width="11"
                    height="11"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.66825 8.63656C3.53122 8.63656 2.56892 8.24277 1.78134 7.45519C0.993764 6.66761 0.599976 5.70531 0.599976 4.56828C0.599976 3.43125 0.993764 2.46894 1.78134 1.68137C2.56892 0.893788 3.53122 0.5 4.66825 0.5C5.80529 0.5 6.76759 0.893788 7.55517 1.68137C8.34274 2.46894 8.73653 3.43125 8.73653 4.56828C8.73653 5.02726 8.66351 5.46017 8.51747 5.867C8.37143 6.27383 8.17323 6.63371 7.92288 6.94666L11.4279 10.4516C11.5426 10.5664 11.6 10.7124 11.6 10.8898C11.6 11.0671 11.5426 11.2131 11.4279 11.3279C11.3131 11.4426 11.1671 11.5 10.9897 11.5C10.8124 11.5 10.6664 11.4426 10.5516 11.3279L7.04663 7.8229C6.73369 8.07326 6.3738 8.27146 5.96697 8.4175C5.56015 8.56354 5.12724 8.63656 4.66825 8.63656ZM4.66825 7.38478C5.45062 7.38478 6.11562 7.11095 6.66328 6.5633C7.21093 6.01565 7.48476 5.35064 7.48476 4.56828C7.48476 3.78592 7.21093 3.12091 6.66328 2.57326C6.11562 2.0256 5.45062 1.75178 4.66825 1.75178C3.88589 1.75178 3.22089 2.0256 2.67323 2.57326C2.12558 3.12091 1.85175 3.78592 1.85175 4.56828C1.85175 5.35064 2.12558 6.01565 2.67323 6.5633C3.22089 7.11095 3.88589 7.38478 4.66825 7.38478Z"
                      fill="var(--text-on-item, #b7b5b5)"
                    />
                  </svg>
                </button>
              </div>
              <button className="homeNotiButton">
                <svg
                  className="homeNotiIcon"
                  width="15"
                  height="18"
                  viewBox="0 0 15 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.49998 15.3C1.24498 15.3 1.03123 15.2138 0.858726 15.0413C0.686226 14.8688 0.599976 14.655 0.599976 14.4C0.599976 14.145 0.686226 13.9313 0.858726 13.7588C1.03123 13.5863 1.24498 13.5 1.49998 13.5H2.39998V7.2C2.39998 5.955 2.77498 4.84875 3.52498 3.88125C4.27498 2.91375 5.24998 2.28 6.44998 1.98V1.35C6.44998 0.975 6.58123 0.65625 6.84373 0.39375C7.10623 0.13125 7.42498 0 7.79998 0C8.17498 0 8.49373 0.13125 8.75623 0.39375C9.01873 0.65625 9.14997 0.975 9.14997 1.35V1.98C10.35 2.28 11.325 2.91375 12.075 3.88125C12.825 4.84875 13.2 5.955 13.2 7.2V13.5H14.1C14.355 13.5 14.5687 13.5863 14.7412 13.7588C14.9137 13.9313 15 14.145 15 14.4C15 14.655 14.9137 14.8688 14.7412 15.0413C14.5687 15.2138 14.355 15.3 14.1 15.3H1.49998ZM7.79998 18C7.30498 18 6.88123 17.8238 6.52873 17.4713C6.17623 17.1188 5.99998 16.695 5.99998 16.2H9.59998C9.59998 16.695 9.42373 17.1188 9.07123 17.4713C8.71873 17.8238 8.29498 18 7.79998 18Z"
                    fill="#B7B5B5"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="dashboard">
            <span className="dashText">Dashboard</span>
            <div className="dashBottom">
              <div className="dashCol">
                <span className="dashListText">Resources</span>
                <div className="dashList">{items.isSuccess && items.data}</div>
              </div>
              <div className="dashCol">
                <span className="dashListText">{courses.isSuccess && courses.data}</span>
                <div className="dashList">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
