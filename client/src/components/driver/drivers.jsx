/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Driver from "./driver"
import { useDispatch, useSelector } from 'react-redux';
import { orderFilter } from "../../redux/actions/actions";
import { useEffect, useState } from "react";

const Drivers = ({ driver, handleDrivers }) => {

  const [isAll, setIsAll] = useState(true)
  const handleState = (param) => {
    setIsAll(param)
  }
  useEffect(()=>{
    handleDrivers()
  },[])

  const dispatch = useDispatch();
  const drivers = useSelector((state) => state.drivers);

  const handleFilterChange = (e) => {
    const { value } = e.target;
    const [orderBy, orderDirection] = value.split(",");
    dispatch(orderFilter(orderBy, orderDirection));
  };

  // useEffect(()=>{
  //   handleBackChange("https://youtu.be/Q9qSwDxF6YI?t=7")
  // })

  return (
    <div style={{ position: "relative" }}>
      <div className="filter">
        <button onClick={()=> handleState(true)}>All</button>
        <select name="Filtro" onChangeCapture={()=> handleState(false)} onChange={handleFilterChange} defaultValue="opciones">
          <option value="opciones" disabled="disable">Opciones</option>
          <option value="birthday,asc">Birthday(A)</option>
          <option value="birthday,desc">Birthday(D)</option>
          <option value="lastname,asc">Lastname(A)</option>
          <option value="lastname,desc">Lastname(B)</option>
          <option value="name,asc">Name(A)</option>
          <option value="name,desc">Name(B)</option>
          <option value="nationality,asc">Nationality(A)</option>
          <option value="nationality,desc">Nationality(B)</option>
        </select>
      </div>
      {isAll === true ?
        <div className="Cards" >
          {driver.length ?
          driver.map((corredor) => (
            <Driver key={corredor.id} corredor={corredor} />
          )):
          <span>No hay conductores con ese nombre</span>}
        </div>
        :
        <div className="Cards">
          {drivers.map((corredor) => (
            <Driver key={corredor.id} corredor={corredor} />
          ))}
        </div>
        }
    </div>
  )
}

export default Drivers