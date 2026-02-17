import { NavLink, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans font-semibold">
            <nav className="fixed top-0 w-full bg-red-600 text-white">
                <div className="flex justify-between items-center px-5 py-2">
                    <h1>🔴 PokéApp</h1>
                    <div className="flex justify-center items-center gap-3">
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "text-yellow-500 font-extrabold underline" : "text-white"}
                        >
                            Inicio
                        </NavLink>
                        <NavLink
                            to="/pokedex"
                            className={({ isActive }) => isActive ? "text-yellow-500 font-extrabold underline" : "text-white"}
                        >
                            Pokedex
                        </NavLink>
                    </div>
                </div>
            </nav>

            <main>
                <Outlet />
            </main>

        </div>
    )
}

export default Layout