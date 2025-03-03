// import "./App.css";
import "./components/global-resets.css";
import Navpane from "./components/Navpane";
import Routing from "./Routing";
import { useLocation, useNavigate } from "react-router-dom";

export default function App() {
  return (
    <>
      <div id="app-container">
        <Navpane />
        <Routing />
      </div>
    </>
  );
}
