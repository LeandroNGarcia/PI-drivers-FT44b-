/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Outlet, useLocation } from "react-router-dom";
import "./driverCustom.css";
import Access_ok from "../loading/access_ok";
import { useSelector } from "react-redux";

const DriverCustom = ({ navigate }) => {

  const { pathname } = useLocation();
  const access = useSelector((state) => state.access);

  return (
    <>
      {access ? <Access_ok /> :
        <div className="driver-custom">
          <p className="principal">Seleccione alguna opcion</p>
          <div className="crear">
            <button style={pathname === "/driver-custom/add" ? {
              borderBottomColor: "red",
              color: "red",
              fontWeight: "bold",
            } : {}} onClick={() => navigate("/driver-custom/add")}>
              Crear
            </button>
          </div>
          <div className="borrar">
            <button style={pathname === "/driver-custom/delete" ? {
              borderBottomColor: "red",
              color: "red",
              fontWeight: "bold",
            } : {}} onClick={() => navigate("/driver-custom/delete")}>
              Borrar
            </button>
          </div>
          <div className="outlet">
            <Outlet />
          </div>
        </div>
      }
    </>
  );
};

export default DriverCustom;