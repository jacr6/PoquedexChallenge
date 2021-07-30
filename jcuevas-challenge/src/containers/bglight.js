import React from 'react';

// create a component function render BgLight
export default function BgLight() {
    return (
<section className="bg-light">
<div className="container">
    <div className="heading-block">
        <h3>Mobile Plans</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa.</p>
    </div>
    <div className="row topmargin-lg">
        <div className="col-lg-4 col-md-6 offset-lg-2">
            <div className="pricing-box">
                <h4>Basic</h4>
                <span>$9</span>
                <p className="text-muted">Per user, per month</p>
                <ul className="topmargin-sm">
                    <li>Lifetime Updates</li>
                    <li>Faster Load Time</li>
                    <li>Unlimited Transactions</li>
                    <li>Data Analysis</li>
                    <li>Free Integrations</li>
                    <li className="not-included">Complete Reports</li>
                    <li className="not-included">Premium Dashboard</li>
                    <li className="not-included">Unlimited Data</li>
                </ul>
                <a href="#" className="secondary-btn topmargin-sm">Get Basic</a>
            </div>
        </div>
        <div className="col-lg-4 col-md-6">
            <div className="pricing-box">
                <h4>Professional</h4>
                <span>$29</span>
                <p className="text-muted">Per user, per month</p>
                <ul className="topmargin-sm">
                    <li>Lifetime Updates</li>
                    <li>Faster Load Time</li>
                    <li>Unlimited Transactions</li>
                    <li>Data Analysis</li>
                    <li>Free Integrations</li>
                    <li>Complete Reports</li>
                    <li>Premium Dashboard</li>
                    <li>Unlimited Data</li>
                </ul>
                <a href="#" className="primary-btn topmargin-sm">Get Pro</a>
            </div>
        </div>
    </div>
</div>
</section>

    );
} 