import React from 'react';
import Home from './Home';
// create a component function render Intro
import {StoreContext} from '../context'

export default function Intro() {
    const context = React.useContext(StoreContext);
    const {t} = context;
    return (
<section id="intro" className="bg-light">
<div className="container">
    <div className="heading-block">
        <h1>{t("New Pokemon App")}</h1>
       <Home/>
        
    </div>
</div>
</section>
    );
} 