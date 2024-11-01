import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="flex justify-center gap-4  font-bold text-emerald-900">
      <NavLink
        to="/"
        className={({ isActive }) => {
          if (isActive) return "border-b-2   border-emerald-900 ";
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="add"
        className={({ isActive }) => {
          if (isActive) return "border-b-2   border-emerald-900 ";
        }}
      >
        Add Birthday
      </NavLink>
    </div>
  );
}
