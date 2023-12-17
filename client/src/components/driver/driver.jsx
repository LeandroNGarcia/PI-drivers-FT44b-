/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import "./driver.css"

const Driver = ({ corredor }) => {
    const { id, name, lastname, nationality, birthday } = corredor;
    const navigate = useNavigate()

    const generateRandomColor = () => {
      const colorsPalette = ["yellow","white","blue","white","blue","green","red","green","red","yellow"]
      const index = Math.floor(Math.random() * colorsPalette.length)
      return colorsPalette[index];
    };

    const cardStyle = {
      backgroundColor: generateRandomColor(),
      cursor: "pointer",
    };

    if(cardStyle.backgroundColor === "white" || cardStyle.backgroundColor === "yellow"){
      cardStyle.color = "black"
    }

  return (
    <div onClick={()=> navigate(`/driver/${id}`)} className="Driver" style={cardStyle}>
      <h2>{lastname}</h2>
      <h3>{name}</h3>
      <h4>{nationality}</h4>
      <h4>{birthday}</h4>
    </div>
  )
}

export default Driver