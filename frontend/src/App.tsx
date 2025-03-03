// import "./App.css";
import "./components/global-resets.css";
import Navpane from "./components/Navpane";
import Routing from "./Routing";
import Login from "./components/Login";

export default function App() {
  return (
    <>
      <div id="app-container">
        <Login />
        {/* <Navpane /> */}
        {/* <Routing /> */}
      </div>
    </>
  );
}
