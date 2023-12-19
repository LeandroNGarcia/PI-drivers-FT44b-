/* eslint-disable react/prop-types */

const Driver = ({ equipo, isActive, onMouseEnter, onMouseLeave, activeTeam }) => {
  const { name, id } = equipo;

  // const generateRandomColor = () => {
  //   const colorsPalette = ["red", "green", "blue", "white", "yellow"];
  //   const index = Math.floor(equipo.id * colorsPalette.length)
  //   return colorsPalette[index]
  // };

  // const cardStyle = {
  //   backgroundColor: generateRandomColor(),
  //   cursor: "pointer",
  // };

  // if (cardStyle.backgroundColor === "white" || cardStyle.backgroundColor === "yellow") {
  //   cardStyle.color = "black"
  // }

  return (
    <div className={activeTeam === null ? "Team" : (`Team ${isActive ? "active" : "noFocus"}`)} style={{
      cursor:"pointer"
    }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      >
      <h2>{id}</h2>
      <img src="../../../public/F1.svg" alt="foto" width={100} className="team-icon" />
      <h3>{name}</h3>
    </div>
  )
}

export default Driver