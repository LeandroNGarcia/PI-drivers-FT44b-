/* eslint-disable react/prop-types */
import "./nav.css"
import { useLocation } from "react-router-dom";

const Nav = ({ uselocal, onSearch, onSearchT, navigate, handleDrivers, handleTeams,local }) => {

  const { pathname } = useLocation()

  return (
    <div className="nav">
      <button className="driverHome" style={(pathname === "/home" && local) ? {
        borderBottomColor: "red",
        color:"red",
        fontWeight:"bold",
        // backgroundColor:"whitesmoke"
      } : {}} onClick={() => { uselocal(true); navigate("/home"); handleDrivers() }} >
        Drivers
      </button>
      <input className="inputHome" onClick={() => {uselocal(true); navigate("/home")}} type="search" placeholder="Search Driver" onChange={(e) => onSearch(e.target.value)} />
      <button className="teamHome" style={(pathname === "/home" && !local) ? {
        borderBottomColor: "red",
        color:"red",
        fontWeight:"bold",
        // backgroundColor:"whitesmoke"
      } : {}} onClick={() => { uselocal(false); navigate("/home"); handleTeams() }} >
        Teams
      </button>
      <input className="inputHome" onClick={() => {uselocal(false); navigate("/home")}} type="search" placeholder="Search Team" onChange={(e) => onSearchT(e.target.value)} />
      <button className="custom" style={(pathname === "/driver-custom" || pathname === "/driver-custom/add" || pathname === "/driver-custom/delete") ? {
        borderBottomColor: "red",
        color:"red",
        fontWeight:"bold",
        // backgroundColor:"whitesmoke"
      } : {}} onClick={() => navigate("/driver-custom")} >
      Customization Hub
      </button>
      <button className="logout" onClick={() => navigate("/")}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <span className="material-symbols-outlined">
          logout
        </span>
      </button>
    </div>
  )
}

export default Nav