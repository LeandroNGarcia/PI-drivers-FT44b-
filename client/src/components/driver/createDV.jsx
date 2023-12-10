/* eslint-disable react/prop-types */
import { useState } from "react";
import * as valid from "./validation"

const CreateDV = ({ postDriver }) => {
  const [error, setError] = useState({});
  const [driverData, setDriverData] = useState({
    name: "",
    lastname: "",
    birthday: "",
    nationality: "",
    teams: "",
  });
  const handleValid = (e) => {
    setDriverData({
      ...driverData,
      [e.target.name]: e.target.value
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
      if (e.target.name === "teams") {
        setError({
          ...error,
          teams: valid.isTeam(e.target.value)
        })
      }
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if (!driverData.name || !driverData.lastname || !driverData.birthday || !driverData.nationality || !driverData.teams) {
        return alert("Complete el formulario")
      }
      if (!error.name || !error.lastname || !error.birthday || !error.nationality || !error.teams) {
        postDriver(driverData)
        return alert("Personaje creado exitosamente")
      }
      return alert("Corrige los errores")
    }


    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" name="name" onChange={handleValid} placeholder="Nombre" className={error.name ? "inputError" : ""} />
          <br />
          <span className="errSpan">{error.name}</span>
          <br />
          <label htmlFor="lastname">Lastname:</label>
          <br />
          <input type="text" name="lastname" onChange={handleValid} placeholder="Apellido" className={error.lastname ? "inputError" : ""} />
          <br />
          <span className="errSpan">{error.lastname}</span>
          <br />
          <label htmlFor="nationality">Nationality:</label>
          <br />
          <input type="text" name="nationality" onChange={handleValid} placeholder="Nacionalidad en ingles" className={error.nationality ? "inputError" : ""} />
          <br />
          <span className="errSpan">{error.nationality}</span>
          <br />
          <label htmlFor="birthday">Birthday:</label>
          <br />
          <input type="text" name="birthday" onChange={handleValid} placeholder="aaaa-mm-dd" className={error.birthday ? "inputError" : ""} />
          <br />
          <span className="errSpan">{error.birthday}</span>
          <br />
          <label htmlFor="teams">Teams:</label>
          <br />
          <input type="text" name="teams" onChange={handleValid} placeholder="Nombre de escuderia" className={error.teams ? "inputError" : ""} />
          <br />
          <span className="errSpan">{error.teams}</span>
          <br />
          <br />
          <button type="submit">Crear Corredor</button>
        </form>
      </div>
    )
  }

export default CreateDV;