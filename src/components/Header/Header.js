import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <Link to="/" className="navbar-brand brand-name">Ujjal Ray</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link headerachor"><i className="fas fa-home" style={{ color: "#007bff" }}></i> Home</Link>
                            </li>
        
                            <li className="nav-item">
                                <Link to="/skills" className="nav-link headerachor"><i className="fas fa-code" style={{ color: "#dc3545" }}></i> Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className="nav-link headerachor"><i className="fas fa-project-diagram" style={{ color: "#ffc107" }}></i> Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link headerachor"><i className="fas fa-envelope" style={{ color: "#17a2b8" }}></i> Contact Me</Link>
                            </li>
                            <li className="nav-item">
                                <a href="https://drive.google.com/file/d/1QBz1nQPhiQ_e8nxIEbuMloRbwrnvuE-m/view?usp=drive_link" className="nav-link headerachor" download>
                                    <i className="fas fa-file-download" style={{ color: "#6c757d" }}></i> Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
