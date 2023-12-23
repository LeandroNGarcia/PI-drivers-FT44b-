/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import * as valid from "./validation"
import "./driverCreate.css"

const CreateDV = ({ postDriver, handleBackChange }) => {
  const [equipo, setEquipo] = useState([])

  useEffect(() => {
    const cargarEquipos = async () => {
      try {
        const response = await fetch("http://localhost:3001/teams");
        const data = await response.json();
        setEquipo(data)
      } catch (error) {
        alert("No se pueden cargar los equipos", error)
      }
    };
    cargarEquipos();
  }, [])

  const [error, setError] = useState({});
  const [driverData, setDriverData] = useState({
    name: "",
    lastname: "",
    birthday: "",
    nationality: "",
    team1: "",
    team2: "",
    team3: ""
  });

  const handleValid = (e) => {
    const { name, value } = e.target;
    setDriverData({
      ...driverData,
      [name]: value,
    });

    if (e.target.name === "name") {
      setError({
        ...error,
        name: valid.isName(e.target.value)
      })
    }
    if (e.target.name === "lastname") {
      setError({
        ...error,
        lastname: valid.isLastname(e.target.value)
      })
    }
    if (e.target.name === "birthday") {
      setError({
        ...error,
        birthday: valid.isBirthday(e.target.value)
      })
    }
    if (e.target.name === "nationality") {
      setError({
        ...error,
        nationality: valid.isNationality(e.target.value)
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!driverData.name || !driverData.lastname || !driverData.birthday || !driverData.nationality || !driverData.team1) {
      return alert("Complete el formulario")
    }
    if (!error.name || !error.lastname || !error.birthday || !error.nationality) {
      postDriver(driverData)
      return alert("Corredor dado de alta")
    }
    return alert("Corrige los errores")
  }

  useEffect(() => {
    handleBackChange("https://th.bing.com/th/id/R.52ec20f86fad3b495ac4440a97a04d09?rik=c%2fh74IZDaEqWYg&riu=http%3a%2f%2fwww.hdwallpapers.in%2fwalls%2fformula_1-HD.jpg&ehk=QQNQFgJqBt6dSbrP4bQO6oLHdYvo3Bl5rxTCBAvzDDY%3d&risl=&pid=ImgRaw&r=0")
  }, [])


  return (
    <div className="create-driver-contain">
      <form onSubmit={handleSubmit}>
        <h1>¿Que corredor deseas dar de alta?</h1>
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" name="name" onChange={handleValid} placeholder="Nombre" className={error.name ? "inputError" : "inputValid"} />
        <br />
        <span className="errSpan">{error.name}</span>
        <br />
        <label htmlFor="lastname">Lastname:</label>
        <br />
        <input type="text" name="lastname" onChange={handleValid} placeholder="Apellido" className={error.lastname ? "inputError" : "inputValid"} />
        <br />
        <span className="errSpan">{error.lastname}</span>
        <br />
        <label htmlFor="nationality">Nationality:</label>
        <br />
        <input type="text" name="nationality" onChange={handleValid} placeholder="Nacionalidad en ingles" className={error.nationality ? "inputError" : "inputValid"} />
        <br />
        <span className="errSpan">{error.nationality}</span>
        <br />
        <label htmlFor="birthday">Birthday:</label>
        <br />
        <input type="text" name="birthday" onChange={handleValid} placeholder="aaaa-mm-dd" className={error.birthday ? "inputError" : "inputValid"} />
        <br />
        <span className="errSpan">{error.birthday}</span>
        <br />
        <label htmlFor="teams">Teams:</label>
        <br />
        <div style={{
          display: "flex",
          justifyContent: "center",
          padding: "5px",
          gap: "5px"
        }}>
          <select onChange={handleValid} name="team1" id="equipo" defaultValue="option" >
            <option value="option" disabled>Option 1</option>
            {equipo.map((team) => (
              <option key={team.id} value={team.name}>
                {team.name}
              </option>
            ))}
          </select>
          <select onChange={handleValid} name="team2" id="equipo" defaultValue="option" >
            <option value="option" disabled>Option 2</option>
            <option value="">Ninguno</option>
            {equipo.map((team) => (
              <option key={team.id} value={team.name}>
                {team.name}
              </option>
            ))}
          </select>
          <select onChange={handleValid} name="team3" id="equipo" defaultValue="option" >
            <option value="option" disabled>Option 3</option>
            <option value="">Ninguno</option>
            {equipo.map((team) => (
              <option key={team.id} value={team.name}>
                {team.name}
              </option>
            ))}
          </select>
        </div>
        <br />
        <span className="errSpan">{error.teams}</span>
        <br />
        <button type="submit" className="add">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
          <span className="material-symbols-outlined">
            add
          </span>
        </button>
      </form>
    </div>
  )
}

export default CreateDV;