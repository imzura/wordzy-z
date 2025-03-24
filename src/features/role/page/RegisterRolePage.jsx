import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import RoleForm from "../components/RoleForm";
import { RoleContext } from "../../../shared/contexts/RoleContext/RoleContext"; // Importa el contexto

const RegistrarRolPage = () => {
  const navigate = useNavigate();
  const { addRole } = useContext(RoleContext); // Obtén la función addRole del contexto

  const handleFormSubmit = (nuevoRol) => {
    console.log("Nuevo Rol:", nuevoRol);
    addRole(nuevoRol); // Guarda el nuevo rol en el contexto
    navigate("/roles"); // Redirige de vuelta a la lista de roles
  };

  const handleCancel = () => {
    navigate("/roles"); // Redirige de vuelta a la lista de roles
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <RoleForm onSubmit={handleFormSubmit} onCancel={handleCancel} />
      </div>
    </div>
  );
};

export default RegistrarRolPage;