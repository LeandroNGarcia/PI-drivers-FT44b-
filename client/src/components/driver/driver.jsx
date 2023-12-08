/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"

const Driver = ({ corredor }) => {
    const { id, name, lastname, nationality, birthday } = corredor;
    const navigate = useNavigate()
  return (
    <div style={{
        backgroundColor:"gray",
        border:"2px solid black",
        width:"15em",
    }}>
      <h2>{lastname}</h2>
      <h3 style={{
        cursor:"pointer"
      }} onClick={()=> navigate(`/driver/${id}`)} >{name}</h3>
      <h4>{nationality}</h4>
      <h4>{birthday}</h4>
      <br />
    </div>
  )
}

export default Driver