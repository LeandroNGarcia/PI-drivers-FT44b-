/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import "./driverCustom.css";
import { useEffect } from "react";

const DriverCustom = ({ navigate, handleBackChange }) => {

  useEffect(()=>{
    handleBackChange("https://th.bing.com/th/id/R.1b1e44468e03a01d909163fd11a2e6cd?rik=dyo9JMP1od03BA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f6%2ff%2f5%2f545239.jpg&ehk=pdHDFkR%2b%2fnCYQD9gbWjF%2bPQjO8GJ7CgnkjIYcZPMm1g%3d&risl=&pid=ImgRaw&r=0")
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
    </div>
  );
};

export default DriverCustom;