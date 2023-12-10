import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Start from "./components/start/start";
import Detail from "./components/detail/detail";
import Err404 from "./components/err/err404";
import CreateDV from "./components/driver/createDV";
import DriverCustom from "./components/driver/driverCustom";
import DeleteDV from "./components/driver/deleteDV";
import { useState } from "react";
import Drivers from "./components/driver/drivers";
import Nav from "./components/nav/nav";
import Teams from "./components/team/teams";

function App() {

  //?Para navegar entre las rutas
  const navigate = useNavigate()

  //?Manejo de los background por componente
  const [backgroundImage, setBack] = useState(null);
  const handleBackChange = (backURL) => {
    setBack(`url(${backURL})`);
  };

  //?Usar el pathname para controlar en que rutas debe aparecer nav
  const { pathname } = useLocation();

  //?Manejo de los llamados para corredores
  const [driver, setDriver] = useState([]);

  //*Funcion para llamar a todos los corredores
  const handleDrivers = async () => {
    try {
      const { data } = await axios("http://localhost:3001/drivers");
      setDriver(data);
    } catch (error) {
      alert(error);
    }
  };

  //*Funcion para buscar corredores por nombre o id
  const onSearch = async (param) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/driver?name=${param}`
      );
      setDriver(data);
    } catch (error) {
      alert(error);
    }
  };

  //?Pequeño manejo de estados para controlar el componente que se debe renderizar
  const [local, setLocal] = useState(true);
  const uselocal = (boolean) => {
    setLocal(boolean);
  };


  //?Manejo de los llamados para los equipos
  const [team, setTeam] = useState([]);

  //*Funcion que llama a todos los equipos
  const handleTeams = async () => {
    try {
      const { data } = await axios("http://localhost:3001/teams");
      setTeam(data);
    } catch (error) {
      alert(error);
    }
  };

  //*Funcion que busca a los equipos por nombre
  const onSearchT = async (param) => {
    try {
      const { data } = await axios(`http://localhost:3001/team/?name=${param}`);
      setTeam(data);
    } catch (error) {
      alert(error.message);
    }
  };

  //?Control de formulario
  const postDriver = async (driverData) => {
    try {
      const { name, lastname, birthday, nationality, teams } = driverData
      const { data } = await axios.post("http://localhost:3001/drivers", {name,lastname,birthday,nationality,teams})
      if(data.aprovation){
        navigate("/driver-custom")
      }
    } catch (error) {
      alert(error.message)
    }
  }

  //?Manejo para corredores agregados
  const [customDriver, setCustomDriver] = useState([]);

  //*Funcion para llamar a todos los corredores
  const handleCustomDriver = async () => {
    try {
      const { data } = await axios("http://localhost:3001/drivers-custom")
      setCustomDriver([...data])
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div style={{ backgroundImage }} className="App">
      {pathname !== "/" && (
        <Nav navigate={navigate} onSearch={onSearch} uselocal={uselocal} onSearchT={onSearchT}                 handleDrivers={handleDrivers} handleTeams={handleTeams} />
      )}
      <Routes>
        <Route
          path="/"
          element={<Start handleBackChange={handleBackChange} />}
        />
        <Route
          path="/home"
          element={
            local === true ? (
              <Drivers
                handleBackChange={handleBackChange}
                driver={driver}
              />
            ) : (
              <Teams
                handleTeams={handleTeams}
                handleBackChange={handleBackChange}
                team={team}
              />
            )
          }
        />
        <Route path="/driver/:id" element={<Detail navigate={navigate} />} />
        <Route
          path="/driver-custom"
          element={<DriverCustom navigate={navigate} handleBackChange={handleBackChange} customDriver={customDriver} handleCustomDriver={handleCustomDriver} />}>
          <Route path="add" element={<CreateDV postDriver={postDriver} />} />
          <Route path="delete" element={<DeleteDV />} />
        </Route>
        <Route path="*" element={<Err404 />} />
      </Routes>
    </div>
  );
}

export default App;