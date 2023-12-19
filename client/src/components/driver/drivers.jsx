/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Driver from "./driver"
import { useDispatch, useSelector } from 'react-redux';
import { orderFilter, setCurrentPage } from "../../redux/actions/actions";
import { useState } from "react";

const Drivers = ({ driver }) => {

  const [isAll, setIsAll] = useState(true)
  const currentPage = useSelector((state) => state.currentPage)
  const itemsPerPage = 6;
  const drivers = useSelector((state) => state.drivers);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const { value } = e.target;
    const [orderBy, orderDirection] = value.split(",");
    dispatch(orderFilter(orderBy, orderDirection));
    dispatch(setCurrentPage(1));
  };

  const handleState = (param) => {
    setIsAll(param);
    dispatch(setCurrentPage(1));
  };

  const currentDrivers = isAll ? driver : drivers;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDriversToDisplay = currentDrivers.slice(indexOfFirstItem, indexOfLastItem);


  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil((isAll ? driver.length : drivers.length) / itemsPerPage); i++) {
    pageNumbers.push(i);
  }


  // useEffect(()=>{
  //   handleBackChange("https://youtu.be/Q9qSwDxF6YI?t=7")
  // },[])

  return (
    <div style={{ position: "relative" }}>
      <div className="filter">
        <button onClick={() => handleState(true)}>All</button>
        <select name="Filtro" onChangeCapture={() => handleState(false)} onChange={handleFilterChange} defaultValue="opciones">
          <option value="opciones" disabled="disable">Opciones</option>
          <option value="birthday,asc">Birthday(A)</option>
          <option value="birthday,desc">Birthday(D)</option>
          <option value="lastname,asc">Lastname(A)</option>
          <option value="lastname,desc">Lastname(D)</option>
          <option value="name,asc">Name(A)</option>
          <option value="name,desc">Name(D)</option>
          <option value="nationality,asc">Nationality(A)</option>
          <option value="nationality,desc">Nationality(D)</option>
        </select>
      </div>
      <div className="Cards">
        {driver.length ? currentDriversToDisplay.map((corredor) => (
          <Driver key={corredor.id} corredor={corredor} />
        )):
        <span>No hay corredores con ese nombre</span>}
      </div>
      <div className="contain-pages">
        {pageNumbers.map((number) => (
          <button className={currentPage === number ? "activePage" : ""} key={number} onClick={() => dispatch(setCurrentPage(number))}>
            {number}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Drivers