import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/Courses";
import AddCourses from "./components/AddCourses";
import Login from "./components/Login";

export default function Routing() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Courses />} path="/courses" />
      <Route element={<AddCourses />} path="/addCourses" />
      <Route element={<Login />} path="/login" />
    </Routes>
  );
}
