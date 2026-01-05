import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const linkClass = ({ isActive }) =>
        `block px-4 py-2 rounded ${
            isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-200"
        }`;

    return (
        <aside className="w-64 bg-white shadow-md">
            <div className="p-4 font-bold text-lg border-b">
                Dashboard
            </div>

            <nav className="p-4 space-y-2">
                <NavLink to="/dashboard" className={linkClass}>
                    Dashboard
                </NavLink>

                <NavLink to="/categories" className={linkClass}>
                    Categories
                </NavLink>

                <NavLink to="/settings" className={linkClass}>
                    Settings
                </NavLink>
            </nav>
        </aside>
    );
}
