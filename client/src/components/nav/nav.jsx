/* eslint-disable react/prop-types */

const Nav = ({ uselocal, onSearch, onSearchT, navigate }) => {
  return (
    <div>
      <button onClick={()=>{uselocal(true); navigate("/home")}} >
        Drivers
      </button>
      <input onClick={()=> uselocal(true)} type="search" placeholder="Search Driver" onChange={(e) => onSearch(e.target.value)} />
      <button onClick={()=>{uselocal(false); navigate("/home")}} >
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