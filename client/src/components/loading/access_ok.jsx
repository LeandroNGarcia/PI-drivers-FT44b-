import { useDispatch } from "react-redux";
import { setAccess } from "../../redux/actions/actions";
import "./alertas.css"

const Access_ok = () => {
    const dispatch = useDispatch();

    return <div className="alerts">
            <h3>Corredor dado de alta exitosamente</h3>
            <p>Puedes verlo en la sección Drivers</p>
        <button onClick={() => dispatch(setAccess(false))}>Ok</button>
    </div>
};

export default Access_ok