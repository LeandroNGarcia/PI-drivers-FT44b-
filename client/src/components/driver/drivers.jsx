/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import Driver from "./driver"

const Drivers = ({ driver }) => {

  return (
    <div className="Cards" >
      {driver.map((corredor) => (
        <Driver key={corredor.code} corredor={corredor} />
      ))}
    </div>
  )
}

export default Drivers