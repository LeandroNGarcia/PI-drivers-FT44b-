import { useDispatch } from "react-redux";
import { setDelete } from "../../redux/actions/actions";
import "./alertas.css"
import { useNavigate } from "react-router-dom";

const Delete_ok = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    return <div className="alerts">
            <h3>Corredor dado de baja exitosamente</h3>
            <p>Puedes verificarlo en la sección Drivers</p>
        <button onClick={() => {dispatch(setDelete(false)); navigate("/driver-custom") }}>Ok</button>
    </div>
};

export default Delete_ok