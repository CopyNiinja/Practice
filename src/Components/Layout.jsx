import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
export default function Layout() {
  return (
    <div className="w-screen h-screen py-8 min-h-full bg-emerald-300">
      <div className="bg-white rounded-md p-4  max-w-[40rem] mx-auto">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}
