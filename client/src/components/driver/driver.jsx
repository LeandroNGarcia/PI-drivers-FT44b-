/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import "./driver.css"

const Driver = ({ corredor }) => {
  const { id, name, lastname, nationality, birthday } = corredor;
  const navigate = useNavigate()

  const generateRandomColor = () => {
    const colorsPalette = ["black", "white", "skyblue"
      , "white", "skyblue", "green", "red", "green", "red", "black"]
    const index = Math.floor(Math.random() * colorsPalette.length)
    return colorsPalette[index];
  };

  const cardStyle = {
    backgroundColor: generateRandomColor(),
    cursor: "pointer",
  };

  if (cardStyle.backgroundColor === "white" || cardStyle.backgroundColor === "skyblue") {
    cardStyle.color = "black"
  }

  return (
    <div onClick={() => navigate(`/driver/${id}`)} className="Driver" style={cardStyle}>
      <div className="icon-driver">
      <img src="/F1.svg" alt="" width={80} className={cardStyle.backgroundColor === "black" ? "imagen" : ""} />
      </div>
      <h3 className="apellido">{lastname.toUpperCase()}</h3>
      <h3 className="nombre">{name.toUpperCase()}</h3>
      <h3 className="nacionalidad">{nationality}</h3>
      <h3 className="cumpleaños">{birthday}</h3>
    </div>
  )
}

export default Driver