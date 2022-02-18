import './Navbar.scss'
import home from '../../assets/home.png'

//NavLink--> no hace refresh al cambiar de ruta
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
    <div className='nav'>
        <p className='nav__home'>
    {/* la className afecta a todos los endpoints porque van con '/' */}
            <NavLink
            className={({isActive}) => (isActive ? 'active' : 'inactive')}
            to="/">
                <img src={home} alt='home'/>
            </NavLink>
        </p>
        <ul>
            <li className='nav__btn'>
                {/* la className afecta a todos los endpoints porque van con '/' */}
                <NavLink
                className={({isActive}) => (isActive ? 'active' : 'inactive')}
                to="/digital-clock">
                    CLOCK
                </NavLink>
            </li>
            <li className='nav__btn'>
                <NavLink
                className={({isActive}) => (isActive ? 'active' : 'inactive')}
                to="/chrono">
                    CHRONO
                </NavLink>
            </li>
            <li className='nav__btn'>
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
