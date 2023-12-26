/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./driverDel.css"
import { useDispatch } from "react-redux";
import { setDelete } from "../../redux/actions/actions";

const DriverDelete = ({ corredor, isActive, onMouseEnter, onMouseLeave, activeDr }) => {
  const { id, name, lastname, nationality, birthday } = corredor;
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/drivers/${id}`);
      return dispatch(setDelete(true))
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div style={{
      cursor: "pointer"
    }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={activeDr === null ? "driverDel" :
        (`driverDel ${isActive ? "activeDel" : "noFocusDel"}`)}>
      <div onClick={() => navigate(`/driver/${id}`)}>
      <h2>{lastname}</h2>
      <h3>{name}</h3>
      <h4>{nationality}</h4>
      <h4>{birthday}</h4>
      </div>
      <button onClick={() => { handleDelete(id) }}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <span className="material-symbols-outlined">
          delete
        </span>
      </button>
      <br />
    </div>
  )
}

export default DriverDelete;