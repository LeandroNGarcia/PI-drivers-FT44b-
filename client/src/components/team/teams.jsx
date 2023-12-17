/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Team from "./team"

const Teams = ({ team }) => {
  const [currentpage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentpage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTeams = team.slice(indexOfFirstItem, indexOfLastItem);


  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil((team.length) / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="Teams" >
        {team.length ?
          currentTeams.map((equipo) => (
            <Team key={equipo.id} equipo={equipo} />
          )) :
          <span>No hay escuderias con ese nombre</span>}
      </div>
      <div className="contain-pages">
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