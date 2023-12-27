/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setCurrentPath, setDelete } from "../../redux/actions/actions";
import DriverDelete from "./driverDelete";
import Delete_ok from "../loading/delete_ok";
import axios from "axios";

/* eslint-disable react/prop-types */
const DeleteDV = ({ customDriver, handleCustomDriver, handleBackChange }) => {

  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const deleteStatus = useSelector((state) => state.deleteStatus)
  const idDelete = useSelector((state)=> state.idDelete)
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/drivers/${id}`);
      return dispatch(setDelete(true))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleCustomDriver();
    dispatch(setCurrentPath(pathname))
  }, []);

  useEffect(() => {
    handleBackChange("https://images.motorsport-magazin.com/images/1200/800/0978146.jpg")
  }, [])

  const [activeDr, setActiveDr] = useState(null);

  const handleHoverDr = (driverId) => {
    setActiveDr(driverId);
  };

  const [question, setQuestion] = useState(false)
  const handleQuestion = (boolean) => {
    setQuestion(boolean)
  }
  return (
    <>
      {deleteStatus ? <Delete_ok /> :
        <div>
          <h1 className="titulo-delete">¿Que corredor deseas dar de baja?</h1>
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
                  onMouseEnter={() => handleHoverDr(corredor.id)}
                  onMouseLeave={() => handleHoverDr(null)}
                  handleQuestion={handleQuestion}
                />
              )) :
              <span>No hay conductores para eliminar</span>}
          </div>
          {question ?
            <div className="Mostrar">
              <h2>¿Seguro que deseas eliminar este corredor?</h2>
              <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "5em"
              }} >
                <button onClick={() => {handleQuestion(false); handleDelete(idDelete)}}>Si</button><button onClick={() => handleQuestion(false)}>No</button>
              </div>
            </div>
            : ""
          }
        </div>
      }
    </>
  )
}

export default DeleteDV;