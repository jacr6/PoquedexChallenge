import React from 'react';
import iphone from "../assets/images/iphone.png"
// create a component function render BgDark
export default function BgDark() {
    return (

        <section className="bg-dark">
            <div className="container">
                <div className="heading-block">
                    <h3 className="text-light">Built for scale</h3>
                    <p className="text-light">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa.</p>
                </div>
                <div className="text-center topmargin-lg">
                    <img src={iphone} className="img-fluid mobile-app" alt="iphone image by Zee Swift" />
                </div>
                <div className="heading-block">
                    <h3 className="text-light topmargin-sm">Download it now</h3>
                    <div className="topmargin-sm">
                        <a href="#" className="primary-btn"><i className="icon ion-logo-apple"></i> App Store</a>
                        <a href="#" className="primary-btn"><i className="icon ion-md-play"></i> Google Play</a>
                    </div>
                    <small className="topmargin-sm text-light">Etiam sagittis iaculis facilisis. Nulla id tincidunt
                        sapien. Vivamus dapibus neque a feugiat dapibus.</small>
                </div>
            </div>
        </section>
    );
} 