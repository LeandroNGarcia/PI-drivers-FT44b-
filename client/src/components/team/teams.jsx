/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import Team from "./team"

const Teams = ({ team }) => {

  return (
    <div className="Cards" >
      {team.length ?
      team.map((equipo) => (
        <Team key={equipo.id} equipo={equipo} />
      )):
      <span>No hay escuderias con ese nombre</span>}
    </div>
  )
}

export default Teams;