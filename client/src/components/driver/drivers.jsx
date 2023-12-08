/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Driver from "./driver"

const Drivers = ({ driver }) => {

  // useEffect(()=>{
  //   handleBackChange("https://youtu.be/Q9qSwDxF6YI?t=7")
  // })

  return (
    <div style={{position:"relative"}}>
      <div className="filter">
        <select name="Filtro" id="">
          <option value="birthday">Birthday</option>
          <option value="lastname">Lastname</option>
          <option value="nationality">Nationality</option>
        </select>
        <select name="Orden" id="">
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select>
      </div>
      <div className="Cards" >
        {driver.map((corredor) => (
          <Driver key={corredor.id} corredor={corredor} />
        ))}
      </div>
    </div>
  )
}

export default Drivers