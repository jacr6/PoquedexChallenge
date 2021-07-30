import React from 'react';
import logodark from "../assets/images/pokemon.png"
// create a component function render Navbar
import {StoreContext, ChangeLanguage } from '../context'
export default function Navbar() {
    const context = React.useContext(StoreContext);
    const {t,lang} = context;
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
                            <a className="nav-link" href="#">{t("Home")}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{t("Features")}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{t("Blog")}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{t("Pricing")}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{t("Contact")}</a>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto">
                        <li  className="nav-item active">
                            <button onClick={()=>ChangeLanguage(lang=="es"?"en":"es")} className="nav-link" >  {t("Change Language")} </button>
                        </li>
                    </ul>{lang}
                </div>
            </div>
        </nav>
    );
} 