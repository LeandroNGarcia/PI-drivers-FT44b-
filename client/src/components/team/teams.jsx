/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Team from "./team"
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPageTeams } from "../../redux/actions/actions";

const Teams = ({ team }) => {
  const navigate = useNavigate()
  // const [currentpage, setCurrentPage] = useState(1);
  const currentpage = useSelector((state)=> state.currentPageTeams)
  const dispatch = useDispatch()
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
            navigate={navigate}
            />
          )) :
          <span>No hay escuderias con ese nombre</span>}
      </div>
      <div className="contain-pagesTeams">
        {pageNumbers.map((number) => (
          <button className={currentpage === number ? "activePage" : ""} key={number} onClick={() => dispatch(setCurrentPageTeams(number))}>
            {number}
          </button>
        ))}
      </div>
    </div>

  )
}

export default Teams;