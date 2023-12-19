/* eslint-disable react/prop-types */
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Team_driver from "./team_driver"


const Team_drivers = ({ navigate }) => {
  const { team } = useParams()
  const [teamDriver, setTeamDriver] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:3001/team_drivers/${team}`)
      .then(({ data }) => {
        if (data) {
          setTeamDriver(data)
        }
      }
      ).catch((error) => alert(error.message));
  }, [team])
  return (
    <div>
      <div style={{
        paddingTop:"3em",
        display: "flex",
        justifyContent:"center",
        flexWrap: "wrap",
        gap: "2em"
      }}>
        {teamDriver.map((corredor) => (
          <Team_driver key={corredor.id} corredor={corredor} navigate={navigate} />
        ))}
      </div>
      <div style={{
        paddingTop:"2em"
      }}>
        {teamDriver.length ? <button onClick={() => navigate("/home")} >Volver a Escuderias</button> : ""}
      </div>
    </div>

  )
}

export default Team_drivers