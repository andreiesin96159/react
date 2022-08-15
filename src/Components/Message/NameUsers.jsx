import { NavLink } from "react-router-dom";
import m from './Message.module.css';

const NameUser = (props) => {
    
    return (
       
        <NavLink to={'/message/' + props.id} className={m.nameUser}>
            {props.name}
        </NavLink>

    )
}
export default NameUser;