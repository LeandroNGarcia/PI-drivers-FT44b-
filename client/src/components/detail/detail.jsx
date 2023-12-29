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
  const divteams = teams && teams.split(",")
  const descriptionLength = description && description.length;
  const text = "Nigel Ernest James Mansell, is a British retired racing driver who won both the Formula One World Championship (1992) and the CART Indy Car World Series (1993). Mansell was the reigning F1 champion when he moved over to CART, becoming the first person to win the CART title in his debut season, and making him the only person to hold both the World Drivers' Championship and the American open-wheel National Championship simultaneously. His career in Formula One spanned 15 seasons, with his final two full seasons of top-level racing being spent in the CART series. Mansell is the second most successful British Formula One driver of all time in terms of race wins with 31 victories, (behind Lewis Hamilton with 103 wins), and is eighth overall on the Formula One race winners list, behind Hamilton,"
  console.log(text.length)

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
            <h4 className={(divteams.length <= 4 ) ? "equipos" : "equiposMuchos"}>{teams}</h4>
          ) : (
            Teams && (
              <h4 className="equipos">{Teams.map((equipo) => equipo.name).join(", ")}</h4>
            )
          )}
          {!Teams ? <h4 className="serverAPI" >Api</h4> : <h4 className="serverDB" >DataBase</h4>}
        </div>
      </div>
      <div className={descriptionLength > 800 ? "fuera-carnet" : "fuera-carnet-corto"}>
      <h4>{description}</h4>
      </div>
      <button onClick={() => navigate(currentPath)} >Volver Atras</button>
    </div>
  )
}

export default Detail