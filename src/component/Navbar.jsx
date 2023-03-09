import { Link } from "react-router-dom";
import "../assets/styles/Navbar.css";
const Navbar = (props) => {
    return ( 
        <nav>
            <Link className="nav__logo" to={"/"}>#vanlife</Link>
            <div className="nav__ancs">
            <Link className="nav__anc" to={"/about"} >About</Link>
            <Link className="nav__anc" to={"/vans"}>Vans</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;