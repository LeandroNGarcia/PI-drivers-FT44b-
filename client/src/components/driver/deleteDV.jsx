/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import DriverDelete from "./driverDelete";

/* eslint-disable react/prop-types */
const DeleteDV = ({customDriver, handleCustomDriver}) => {

  useEffect(()=>{
    handleCustomDriver()
  },[])

  return (
    <div className="Cards">
      {customDriver.length ?
      customDriver.map((corredor) => (
        <DriverDelete key={corredor.id} corredor={corredor}/>
      )):
      <span>No hay conductores para eliminar</span>}
    </div>
  )
}

export default DeleteDV;