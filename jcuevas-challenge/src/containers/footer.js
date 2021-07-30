import React from 'react';
import logolight from "../assets/images/iphone.png"
//creat app functions render footer
export default function Footer() {
    return (

        <section id="footer" className="bg-dark">
            <div className="container text-center">
                <a href="#"><img src={logolight} className="img-responsive logo-footer"
                    alt="Pokemon App" /></a>
                <ul className="list-inline topmargin-sm">
                    <li className="list-inline-item mobile-list"><a className="footer-link" target="_blank" href="#">Home</a></li>
                    <li className="list-inline-item mobile-list"><a className="footer-link" target="_blank" href="#">Features</a>
                    </li>
                    <li className="list-inline-item mobile-list"><a className="footer-link" target="_blank" href="#">Blog</a></li>
                    <li className="list-inline-item mobile-list"><a className="footer-link" target="_blank" href="#">Pricing</a>
                    </li>
                    <li className="list-inline-item mobile-list"><a className="footer-link" target="_blank" href="#">Contact</a>
                    </li>
                </ul>

                <ul className="list-inline topmargin-sm">
                    <li className="list-inline-item"><a className="footer-link" target="_blank" href="#"><i
                        className="icon ion-logo-instagram"></i></a></li>
                    <li className="list-inline-item"><a className="footer-link" target="_blank" href="#"><i
                        className="icon ion-logo-twitter"></i></a></li>
                    <li className="list-inline-item"><a className="footer-link" target="_blank" href="#"><i
                        className="icon ion-logo-youtube"></i></a></li>
                    <li className="list-inline-item"><a className="footer-link" target="_blank" href="#"><i
                        className="icon ion-logo-dribbble"></i></a></li>
                    <li className="list-inline-item"><a className="footer-link" target="_blank" href="#"><i
                        className="icon ion-logo-facebook"></i></a></li>
                </ul>
                <small className="topmargin-sm">©2019 All Rights Reserved. Pokemon App®
                    ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis facilisis. Nulla id tincidunt
                    sapien. Vivamus dapibus neque a feugiat dapibus. Nulla ut vehicula neque. Etiam a nulla libero. Created
                    by <a href="https://smartoasis.mx/" target="_blank" rel="noopener"><b>Smart Oasis</b></a>
                </small>
            </div>
        </section>

    );
}
 