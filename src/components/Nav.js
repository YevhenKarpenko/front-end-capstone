import '../App.css';
import logo from "../assets/Logo .svg"
import {useState} from "react"

function Nav(){
const [isMenuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => (setMenuOpen( (prevValue) => !prevValue));

    return(
   <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <a href="/" className='logo'>
            <img src={logo} alt="Logo"/>
        </a>

        {/* Mobile navBar */}

        <div className='menu-icon' onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>


        {/* Nav items */}
        <ul className={`nav-links ${isMenuOpen ? "visible" : ""}`}>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/">About</a>
            </li>
            <li>
                <a href="/">Menu</a>
            </li>
            <li>
                <a href="/">Reservations</a>
            </li>
            <li>
                <a href="/">Order Online</a>
            </li>
            <li>
                <a href="/">LogIn</a>
            </li>
        </ul>
   </nav>

    )
}

export default Nav

