/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./team_driver.css"
import { useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import { setCurrentPath } from "../../redux/actions/actions";

const Team_driver = ({ corredor, navigate }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation()

  useEffect(()=>{
    dispatch(setCurrentPath(pathname))
  },[])

  const { name, lastname, nationality } = corredor
  return (
    <div className="team_driver" onClick={()=> navigate(`/driver/${corredor.id}`)}>
      <div className="auto-driver">
      <img src="https://th.bing.com/th/id/R.e0845d1cdebafc0a0cd85c798dd074be?rik=%2fhunVSmMVhykrg&riu=http%3a%2f%2fgetdrawings.com%2fimg%2fcar-silhouette-png-27.png&ehk=GgjfWR3slXUxY83uKbHnYm0EdxFVF42DzR8KjXVc%2bRQ%3d&risl=&pid=ImgRaw&r=0" alt="auto" width={50} />
      </div>
      <h3>{name?name:"Nombre"}</h3>
      <h3>{lastname?lastname:"Apellido"}</h3>
      <h3>{nationality?nationality:"Nacionalidad"}</h3>
    </div>
  )
}

export default Team_driver