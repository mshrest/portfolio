import { HashLink as Link} from "react-router-hash-link";
import './nav.css';

const Navbar = () => {
    return (
        <div className="nav">
            <nav className="navbar">
                <Link to="#skills">Competencies</Link>
                <Link to="#project">Projects</Link>
                <Link to="#contact">Contact</Link>
            </nav>
        </div>
    )
}

export default Navbar;
