/* eslint-disable react/prop-types */

const Driver = ({ equipo }) => {
    const { name, id } = equipo;

    const generateRandomColor = () => {
      const colorsPalette = ["red", "green", "blue", "white", "yellow"];
      const index = Math.floor(Math.random() * colorsPalette.length)
      return colorsPalette[index]
    };

    const cardStyle = {
      backgroundColor: generateRandomColor(),
      cursor: "pointer",
    };

    if(cardStyle.backgroundColor === "white" || cardStyle.backgroundColor === "yellow"){
      cardStyle.color = "black"
    }

  return (
    <div className="Team" style={cardStyle}>
      <h2>{id}</h2>
      <h3>{name}</h3>
    </div>
  )
}

export default Driver