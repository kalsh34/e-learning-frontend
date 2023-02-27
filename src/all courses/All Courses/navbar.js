
// import { ReactComponent as Logo } from "../svg/logo.svg";
import { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { HiChevronDoubleDown } from "react-icons/hi";
// import '../styles/navbar.css';
import { Link } from "react-router-dom";
const Navbar = () => {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");

    }
    return (
        <div className="navbar">
            <header>
                {/* <Logo /> */}
                <h3 className='navcg'>| <HiChevronDoubleDown/> Category</h3>
                <nav ref={navRef}>
                    <Link to={'/'}>Home</Link>
                    <a href="">about</a>
                    <a href="">Contact us</a>
                    <a href="">Certfication</a>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
                {/* <div className="buttons">
                    <Link to={'/sign'}>
                    <button className="btn">  Sign Up</button>
                    </Link>
                    <Link to={'/sign_in'}>
                    <button className="btn">Sign In</button>
                    </Link>
                </div> */}
            </header>
        </div>
    );
}

export default Navbar;