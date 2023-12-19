/* eslint-disable react/prop-types */

const Team_driver = ({ corredor, navigate }) => {
    const { name, lastname, nationality } = corredor
  return (
    <div style={{
        backgroundColor:"green",
        width:"10em",
        cursor:"pointer"
    }} onClick={()=> navigate(`/driver/${corredor.id}`)}>
      <h3>{name?name:"Nombre"}</h3>
      <h3>{lastname?lastname:"Apellido"}</h3>
      <h3>{nationality?nationality:"Nacionalidad"}</h3>
    </div>
  )
}

export default Team_driver