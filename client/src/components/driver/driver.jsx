import { Outlet, Link } from "react-router-dom"

const Driver = () => {
  return (
    <div>
      <p>¿Qué desea hacer?</p>
      <nav>
        <ul>
          <li><Link to="/driver/add">Crear</Link></li>
          <li><Link to="/driver/delete">Eliminar</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Driver