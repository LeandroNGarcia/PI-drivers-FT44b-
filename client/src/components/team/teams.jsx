/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Team from "./team"

const Teams = ({ team }) => {
  const [currentpage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentpage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTeams = team.slice(indexOfFirstItem, indexOfLastItem);


  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil((team.length) / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [activeTeam, setActiveTeam] = useState(null);

  const handleTeamHover = (teamId) => {
    setActiveTeam(teamId);
  };

  return (
    <div>
      <div className="Teams" >
        {team.length ?
          currentTeams.map((equipo) => (
            <Team key={equipo.id} equipo={equipo} activeTeam={activeTeam} isActive={equipo.id === activeTeam}
            onMouseEnter={() => handleTeamHover(equipo.id)}
            onMouseLeave={() => handleTeamHover(null)}
            />
          )) :
          <span>No hay escuderias con ese nombre</span>}
      </div>
      <div className="contain-pagesTeams">
        {pageNumbers.map((number) => (
          <button className={currentpage === number ? "activePage" : ""} key={number} onClick={() => setCurrentPage(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>

  )
}

export default Teams;