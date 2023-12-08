/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./start.css"
import Loading from "../loading/loading";

const Start = ({ handleBackChange }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);
    handleBackChange("https://th.bing.com/th/id/R.7921678df5cb0f79e5c58ee7b5823803?rik=Vx1k2BnocsdO2Q&pid=ImgRaw&r=0");

    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 6000);
  };

  useEffect(() => {
    handleBackChange("https://wallpaperaccess.com/full/4005756.jpg")
  }, [handleBackChange])

  return (
    <div className="contain">
      {loading ? (
        <div>
          <Loading handleBackChange={handleBackChange} />
        </div>
      ) : (
        <div>
          <img src="https://1000marcas.net/wp-content/uploads/2020/01/logo-F1.png" alt="F1" width={750} className="F1" />
          <br />
          <button className="start" onClick={handleButtonClick}>Start</button>
        </div>
      )}
    </div>
  );
};

export default Start;