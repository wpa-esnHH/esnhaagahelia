import { Outlet, Link } from "react-router-dom";
import '../css/Layout.css';
import { useState } from "react";
import esnImage from '/Users/admin/Desktop/wpa-esn/esnhaagahelia/src/photo/ESN-logo-full-colour-safe-space-rgb.png'
import articles from "../articles";


const Layout = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }

    const closeNavbar = () => {
        setIsOpen(false)
    }
    return (
        <>
            <nav className="navbar">
                <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <li className="navbar-brand">
                        <Link to="/"><img src={esnImage} alt="ESN Logo" className="logo-img" /></Link>
                    </li>
                    <li className="navbar-right">
                        <Link to="/" onClick={closeNavbar}>Home</Link>
                    </li>
                    <li className="navbar-right">
                        <Link to="/events" onClick={closeNavbar}>Events</Link>
                    </li>
                    <li className="navbar-right">
                        <div className="paste-button">
                            <button className="button"> Information &nbsp; ▼</button>
                            <div className="dropdown-content">
                                {/* <Link to="/esnWebsite/articlePage1" id="top">Accommodation</Link> */}
                                {/* <Link to="/esnhaagahelia/events" id="middle" onClick={closeNavbar}>Events</Link> */}
                                {/* <Link to="/esnWebsite/articlePage2" id="bottom">What to bring with you to Finland?</Link> */}
                                {articles.map((article, index) => (
                                    <Link key={article.id} to={`/${article.id}`} id="middle" onClick={closeNavbar}>
                                        {article.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </li>
                    <li className="navbar-right">
                        <Link to="/about" onClick={closeNavbar}>About us</Link>
                    </li>
                </ul>
                <button className="navbar-toggle" onClick={toggleNavbar}>
                    <span className="navbar-toggle-icon">&#9776;</span>
                </button>
            </nav>

            <Outlet />
        </>

    )
};

export default Layout;