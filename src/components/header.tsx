import Link from "next/link";
import "../style/header.css";


function Header(){
    return(
        <div className="header">
             {/* left */}
             <div>
                <h1 className="logo">MA.</h1>
             </div>
             {/* right */}
             <div className="header-right-div">
                <ul className="header-links">
                    <li>
                        <Link className="nav-links" href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link  className="nav-links" href={"/"}>About</Link>
                    </li>
                    <li>
                        <Link  className="nav-links" href={"/"}>Contact</Link>
                    </li>
                </ul>
             </div>
        </div>
    )
}
export default Header