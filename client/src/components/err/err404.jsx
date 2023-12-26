/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import "./err404.css"
import { useEffect } from "react"

const Err404 = ({ navigate, handleBackChange }) => {

  const currentpath = useSelector((state) => state.curretnPath)

  useEffect(()=>{
    handleBackChange("https://th.bing.com/th/id/R.6b5dce6c7f13ca5329c104e2cd5155cb?rik=CIJR4fLsTEWWEw&pid=ImgRaw&r=0")
  },[])

  return (
    <div className="contain-err">
      <div className="err">
        <img src="https://cdn-icons-png.flaticon.com/128/8452/8452928.png" alt="not found" />
        <p style={{
          color: "white",
          fontSize: "2em"
        }}>Page not found</p>
        <button onClick={() => navigate(currentpath)} >Volver Atras</button>
      </div>
    </div>
  )
}

export default Err404