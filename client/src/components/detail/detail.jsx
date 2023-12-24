/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import axios from "axios"
import "./detail.css"

const Detail = ({ navigate, handleBackChange }) => {

  const currentPath = useSelector((state) => state.curretnPath)
  useEffect(()=>{
    handleBackChange("https://wallpaperaccess.com/full/563870.jpg")
  },[])

  const { id } = useParams();
  const [driver, setDriver] = useState({})

  useEffect(() => {
    axios(`http://localhost:3001/driver/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setDriver(data)
        }
      }
    ).catch((error) => alert(error));

    return setDriver({})

  }, [id])

  const { name, lastname, birthday, nationality, description, teams, Teams, image } = driver

  return (
    <div className="contain-detail">
      <div className="contain-carnet">
        <img src={image} alt="Foto" className="foto-carnet" />
        <div className="datos-carnet">
          <h1 className="lastN">{lastname}</h1>
          <h2 className="name">{name}</h2>
          <img src="https://th.bing.com/th/id/R.20071975fc6dcaae33d6db3a47401b0a?rik=v5u%2fyqoPPfSnOw&pid=ImgRaw&r=0" alt="" className="codigo" />
          <img src="https://www.freepnglogos.com/uploads/signature-png/signatures-download-clipart-29.png" alt="" className="firma" />
          <h4 className="birthday">{birthday}</h4>
          <h4 className="nation">{nationality}</h4>
          <h4 className="dni">{id}</h4>
          {teams ? (
            <h4 className={(teams.split("").length < 4 ) ? "equipos" : "equiposMuchos"}>{teams}</h4>
          ) : (
            Teams && (
              <h4 className="equipos">{Teams.map((equipo) => equipo.name).join(", ")}</h4>
            )
          )}
        </div>
      </div>
      <div className="fuera-carnet">
      <h4>{description}</h4>
      </div>
      <button onClick={() => navigate(currentPath)} >Volver Atras</button>
    </div>
  )
}

export default Detail