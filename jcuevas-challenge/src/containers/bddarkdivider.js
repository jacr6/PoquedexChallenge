import React from 'react';

//create a function that renders a dark divider
export default function BgDarkDivider() {
  return (

        <section className="bg-dark divider">
            <div className="container">
                <div className="heading-block">
                    <h3 className="text-light">Sign up now to get a discount</h3>
                </div>
                <form className="form topmargin-lg">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                                <input type="text" className="form-control" id="name" placeholder="Name" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <input type="password" className="form-control" id="inputPassword2" placeholder="Email" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <button type="submit" className="primary-btn">Sign up</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
} 