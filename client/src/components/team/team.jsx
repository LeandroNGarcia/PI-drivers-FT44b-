/* eslint-disable react/prop-types */

const Driver = ({ equipo, isActive, onMouseEnter, onMouseLeave, activeTeam, navigate }) => {
  const { name, id } = equipo;

  return (
    <div className={activeTeam === null ? "Team" : (`Team ${isActive ? "active" : "noFocus"}`)} style={{
      cursor:"pointer"
    }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => navigate(`/team_drivers/${name}`)}
      >
      <h2>{id}</h2>
      <img src="/F1.svg" alt="foto" width={100} className="team-icon" />
      <h3>{name}</h3>
    </div>
  )
}

export default Driver