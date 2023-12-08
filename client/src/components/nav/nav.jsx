/* eslint-disable react/prop-types */
import "./nav.css"

const Nav = ({ uselocal, onSearch, onSearchT, navigate, handleDrivers, handleTeams }) => {
  return (
    <div className="nav">
      <button onClick={()=>{uselocal(true); navigate("/home"); handleDrivers()}} >
        Drivers
      </button>
      <input onClick={()=> uselocal(true)} type="search" placeholder="Search Driver" onChange={(e) => onSearch(e.target.value)} />
      <button onClick={()=>{uselocal(false); navigate("/home"); handleTeams()}} >
        Teams
      </button>
      <input onClick={()=> uselocal(false)} type="search" placeholder="Search Team" onChange={(e) => onSearchT(e.target.value)} />
      <button onClick={()=> navigate("/driver-custom")} >
        Custom
      </button>
    </div>
  )
}

export default Nav