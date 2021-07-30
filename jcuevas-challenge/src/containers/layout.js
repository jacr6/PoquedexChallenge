import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Intro from './intro';
import BgDark from './bgdark';
import BgLight from './bglight';
import BgDarkDivider from './bddarkdivider';



// create a component function render Layout
export default function Layout() {
    return (
        <div>
            <Navbar/>
            <Intro/>
            <BgDark/>
            {/* <BgLight/>
            <BgDarkDivider/> 
            <Footer/> */}

         
            </div>
    );
} 