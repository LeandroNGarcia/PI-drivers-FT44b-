/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import DriverDelete from "./driverDelete";

/* eslint-disable react/prop-types */
const DeleteDV = ({ customDriver, handleCustomDriver }) => {

  useEffect(() => {
    handleCustomDriver()
  }, []);

  const [activeDr, setActiveDr] = useState(null);

  const handleHoverDr = (driverId) => {
    setActiveDr(driverId);
  };

  return (
    <div>
      <h1>¿Que corredor deseas dar de baja?</h1>
      <div style={{
        paddingTop: "3em",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2em"
      }}>
        {customDriver.length ?
          customDriver.map((corredor) => (
            <DriverDelete key={corredor.id} corredor={corredor}
            activeDr={activeDr}
            isActive={corredor.id === activeDr}
            onMouseEnter={()=> handleHoverDr(corredor.id)}
            onMouseLeave={()=> handleHoverDr(null)}
            />
          )) :
          <span>No hay conductores para eliminar</span>}
      </div>
    </div>
  )
}

export default DeleteDV;