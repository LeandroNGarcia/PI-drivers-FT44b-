/* eslint-disable react/prop-types */

const Driver = ({ equipo }) => {
    const { name, id } = equipo;
  return (
    <div style={{
        backgroundColor:"gray",
        border:"2px solid black",
        width:"6em"
    }}>
      <h2>{id}</h2>
      <h3>{name}</h3>
    </div>
  )
}

export default Driver