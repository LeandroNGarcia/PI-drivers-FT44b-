/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Team from "./team"
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPageTeams } from "../../redux/actions/actions";

const Teams = ({ team, handleBackChange }) => {
  const navigate = useNavigate()
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

  useEffect(()=>{
    handleBackChange("https://th.bing.com/th/id/R.1b1e44468e03a01d909163fd11a2e6cd?rik=dyo9JMP1od03BA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f6%2ff%2f5%2f545239.jpg&ehk=pdHDFkR%2b%2fnCYQD9gbWjF%2bPQjO8GJ7CgnkjIYcZPMm1g%3d&risl=&pid=ImgRaw&r=0")
  },[])

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