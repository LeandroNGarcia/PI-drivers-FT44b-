import "./App.css";
import { Routes, Route } from "react-router-dom";
import Start from "./components/start/start";
import Home from "./components/home/home";
import Detail from "./components/detail/detail";
import Err404 from "./components/err/err404";
import CreateDV from "./components/driver/createDV";
import Driver from "./components/driver/driver";
import DeleteDV from "./components/driver/deleteDV";
import { useState } from "react";

function App() {
  const [backgroundImage, setBack] = useState(null);

  const handleBackChange = (backURL) => {
    setBack(`url(${backURL})`);
  };

  return (
    <div style={{backgroundImage}} className="App">
      <Routes>
        <Route path="/" element={<Start handleBackChange={handleBackChange} />} />
        <Route path="/home" element={<Home handleBackChange={handleBackChange} />} />
        <Route path="/driver/:id" element={<Detail />} />
        <Route path="/driver" element={<Driver handleBackChange={handleBackChange} />}>
          <Route path="add" element={<CreateDV />} />
          <Route path="delete" element={<DeleteDV />} />
        </Route>
        <Route path="*" element={<Err404 />} />
      </Routes>
    </div>
  );
}

export default App;
