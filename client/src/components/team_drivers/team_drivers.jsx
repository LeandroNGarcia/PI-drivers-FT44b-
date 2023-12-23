/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Team_driver from "./team_driver"

const Team_drivers = ({ navigate, handleBackChange }) => {
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
  useEffect(()=>{
    handleBackChange("https://th.bing.com/th/id/R.1b1e44468e03a01d909163fd11a2e6cd?rik=dyo9JMP1od03BA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f6%2ff%2f5%2f545239.jpg&ehk=pdHDFkR%2b%2fnCYQD9gbWjF%2bPQjO8GJ7CgnkjIYcZPMm1g%3d&risl=&pid=ImgRaw&r=0")
  },[])
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
        paddingTop:"2em",
        paddingBottom:"2em"
      }}>
        {teamDriver.length ? <button onClick={() => navigate("/home")} >Volver a Escuderias</button> : ""}
      </div>
    </div>

  )
}

export default Team_drivers