import './Navbar.scss'

//NavLink--> no hace refresh al cambiar de ruta
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
    <div className='nav'>
        <ul>
            <li>
                {/* la className afecta a todos los endpoints porque van con '/' */}
                <NavLink
                className={({isActive}) => (isActive ? 'active' : 'inactive')}
                to="/digital-clock">
                    CLOCK
                </NavLink>
            </li>
            <li>
                <NavLink
                className={({isActive}) => (isActive ? 'active' : 'inactive')}
                to="/chrono">
                    CHRONO
                </NavLink>
            </li>
            <li>
                <NavLink
                className={({isActive}) => (isActive ? 'active' : 'inactive')}
                to="/countdown">
                    COUNTDOWN
                </NavLink>
            </li>
        </ul>

    </div>
    );
};
