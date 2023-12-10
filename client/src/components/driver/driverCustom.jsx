/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import "./driverCustom.css";
import Driver from "./driver";

const DriverCustom = ({ navigate, customDriver, handleCustomDriver }) => {

  useEffect(()=>{
    handleCustomDriver()
  },[])

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
      <div className="Customs">
        {customDriver.map((corredor) =>(
          <Driver key={corredor.id} corredor={corredor}/>
        ))}
      </div>
    </div>
  );
};

export default DriverCustom;