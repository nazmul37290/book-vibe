import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Root = () => {
  return (
    <div className="max-w-6xl p-2 lg:p-0 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;
