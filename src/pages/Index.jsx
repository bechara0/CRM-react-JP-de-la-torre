import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";

export function loader() {
  const clientes = [
    {
      nombre: "Juan",
      empresa: "Codigo Con Juan",
      email: "juan@juan.com",
      telefono: "102013313",
      notas: "Nueva Nota",
      id: 1,
    },
    {
      nombre: "Karen",
      empresa: "Codigo Con Juan",
      email: "karen_nuevo@juan.com",
      telefono: "138198313",
      notas: "Karen desea una REST API",
      id: 2,
    },
    {
      id: 4,
      nombre: "Miguel",
      telefono: 319381983,
      email: "miguel@juan.com",
      empresa: "Codigo Con Juan",
    },
    {
      id: 5,
      nombre: "Pedro",
      telefono: 1398198938,
      email: "pedro@juan.com",
      empresa: "Codigo Con Juan",
    },
    {
      nombre: "Juan Desde React",
      empresa: "Codigo con Juan",
      email: "correo@correo.com",
      telefono: "10901",
      notas: "El Cliente desea un ecommerce",
      id: 6,
    },
  ];

  return clientes;
}

const Index = () => {
  const clientes = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="m-3">Administra tus Clientes</p>
      {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Clientes</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <Cliente key={cliente.id} cliente={cliente} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay clientes aún</p>
      )}
    </>
  );
};

export default Index;
