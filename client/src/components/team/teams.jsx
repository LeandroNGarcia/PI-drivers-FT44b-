/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import Team from "./team"

const Teams = ({ team }) => {

  return (
    <div className="Cards" >
      {team.map((equipo) => (
        <Team key={equipo.name} equipo={equipo} />
      ))}
    </div>
  )
}

export default Teams;