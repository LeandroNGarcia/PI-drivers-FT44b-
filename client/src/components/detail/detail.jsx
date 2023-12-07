/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const Detail = ({ navigate }) => {

  const { id } = useParams();
  const [driver, setDriver] = useState({})

  useEffect(()=>{
    axios(`http://localhost:3001/driver/${id}`).then(
      ({ data }) => {
        if(data.name){
          setDriver(data)
        }
      }
    ).catch((error) => alert(error));

    return setDriver({})

  },[id])

  const { name, lastname, birthday, nationality, description, teams } = driver

  return (
    <div>
      <h1>{lastname}</h1>
      <h2>{name}</h2>
      <h4>{birthday}</h4>
      <h4>{nationality}</h4>
      <h4>{teams}</h4>
      <h4>{description}</h4>
      <button onClick={()=> navigate("/home")} >Volver Atras</button>
    </div>
  )
}

export default Detail