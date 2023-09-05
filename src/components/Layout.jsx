import { Outlet, Link, useLocation, NavLink } from "react-router-dom";

export const Layout = () => {
  const location = useLocation();

  return (
    <div className="md:flex md:h-screen">
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - Clientes
        </h2>
        <nav className="mt-10">
          <Link
            className={`${
              location.pathname === "/" ? "text-yellow-400" : "text-white"
            } text-2xl block mt-2 hover:text-blue-200 text-white`}
            to="/"
          >
            Clientes
          </Link>
          <Link
            className={`${
              location.pathname === "/clientes/nuevo"
                ? "text-yellow-400"
                : "text-white"
            } text-2xl block mt-2 hover:text-blue-200 text-white`}
            to="/clientes/nuevo"
          >
            Nuevo Cliente
          </Link>
        </nav>
      </aside>
      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};
