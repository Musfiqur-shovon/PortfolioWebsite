import React, { useState } from 'react';
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../assests/images/aboutLogo.png";

function Header(){

    const [isButtonOn, setButtonOn] = useState(false);

    const showSidebar = () => {
        const newButtonState = !isButtonOn;
        setButtonOn(newButtonState);
      };
    return(
        <>
                <header>
                    <nav>
                        
                        <div className={isButtonOn ? 'showOn' : 'showOff'}>
                        <div className="sidebar-head">
                            <div className="cross-button" onClick={showSidebar}>
                                <FontAwesomeIcon icon={faXmark} />
                            </div>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Sercices</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                            <div className="sidebar-info">
                                <img src={Logo} alt=""/>
                                <h3>Musfiqur Shovon</h3>
                            </div>
                        </div>
                        </div>

                        <div className="navbar-head">
                            <div className="navbar-brand-head">
                                <img src={Logo} alt="Brand Logo" class="brand-logo-head"/>
                                <div className="brand-text-head">
                                    <span>M</span>usfiqur 
                                    <span className="space">S</span>hovon
                                </div>
                            </div>
                            <ul className="navbar-nav-head">
                                <li className="nav-item-head"><a href="#home" className="nav-link-head">Home</a></li>
                                <li className="nav-item-head"><a href="#about" className="nav-link-head">About</a></li>
                                <li className="nav-item-head"><a href="#services" className="nav-link-head">Services</a></li>
                                <li className="nav-item-head"><a href="#skills" className="nav-link-head">Skills</a></li>
                                <li className="nav-item-head"><a href="#projects" className="nav-link-head">Projects</a></li>
                                <li className="nav-item-head"><a href="#contact" className="nav-link-head">Contact</a></li>
                            </ul>
                            <div className="barIcon" onClick={showSidebar}>
                                <FontAwesomeIcon icon={faBars} />
                            </div>
                        </div>
                    </nav>
                </header>
        </>
    );
};


export default Header;