import React from 'react';
import logodark from "../assets/images/pokemon.png"
// create a component function render Navbar
export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="#"><img src={logodark} className="logo-navbar" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="icon ion-md-menu"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><i className="icon ion-md-download"></i> Download now </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
} 