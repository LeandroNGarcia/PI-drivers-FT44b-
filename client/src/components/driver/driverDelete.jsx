/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./driverDel.css"

const DriverDelete = ({ corredor, isActive, onMouseEnter, onMouseLeave, activeDr }) => {
    const { id, name, lastname, nationality, birthday } = corredor;
    const navigate = useNavigate()
    const handleDelete = async (id) => {
      try {
        const { data } = await axios.delete(`http://localhost:3001/drivers/${id}`);
        alert(data.message);
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div style={{
        cursor:"pointer"
    }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={activeDr === null ? "driverDel" :
    (`driverDel ${isActive ? "activeDel" : "noFocusDel"}`)}>
      <h2>{lastname}</h2>
      <h3 onClick={()=> navigate(`/driverAdd/${id}`)}>{name}</h3>
      <h4>{nationality}</h4>
      <h4>{birthday}</h4>
      <button onClick={()=>{ handleDelete(id); navigate("/driver-custom")}}>Delete</button>
      <br />
    </div>
  )
}

export default DriverDelete;