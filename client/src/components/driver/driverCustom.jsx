/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import "./driverCustom.css";

const DriverCustom = ({ navigate }) => {

  return (
    <div className="driver-custom">
      <p className="principal">Seleccione alguna opcion</p>
      <div className="crear">
        <button onClick={()=>navigate("/driver-custom/add")}>
          Crear
        </button>
      </div>
      <div className="borrar">
        <button onClick={()=>navigate("/driver-custom/delete")}>
          Borrar
        </button>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default DriverCustom;