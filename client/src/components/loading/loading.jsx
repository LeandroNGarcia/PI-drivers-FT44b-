/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Loading = ({ handleBackChange }) => {
  useEffect(() => {
    handleBackChange("https://th.bing.com/th/id/R.7921678df5cb0f79e5c58ee7b5823803?rik=Vx1k2BnocsdO2Q&pid=ImgRaw&r=0");
  }, [handleBackChange]);

  return (
    <div>
      <span className="loader"></span>
      <p className="cargando">Cargando...</p>
    </div>
  );
};

export default Loading;
