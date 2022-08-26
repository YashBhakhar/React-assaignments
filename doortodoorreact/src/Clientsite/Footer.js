import React from 'react';

function Footer(props) {
    return (
        <div>
            <footer className="w3l-footer-66">
                <div className="footer-28-main">
                    <div className="container">
                        <div className="row footer-hny-top">
                            <div className="col-lg-6 footer-logo pl-lg-0">
                                <h2><a className="navbar-brand" href="index.html">Clean<span>Freshly</span></a></h2>
                            </div>
                        </div>
                        <div className="row footer-top-28">
                            <div className="col-lg-2 col-md-6 footer-list-28 pl-lg-0">
                                <h6 className="footer-title-28">Extra Links</h6>
                                <ul>
                                    <li><a href="about.html">About Company</a></li>
                                    <li><a href="services.html">Our Services</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-5 col-md-6 footer-list-28">
                                <h6 className="footer-title-28">list of Services</h6>
                                <ul className="d-grid footer-column-2">
                                    <li><a href="services.html">Plumbing</a></li>
                                    <li><a href="services.html">Carpenter</a></li>
                                    <li><a href="services.html">Electrician</a></li>
                                    <li><a href="services.html">Wall painting</a></li>
                                    <li><a href="services.html">Furniture moving</a></li>
                                    <li><a href="services.html">House Cleaning</a></li>
                                    <li><a href="services.html">Replacing wires</a></li>
                                    <li><a href="services.html">AC &amp; Refrigerator</a></li>
                                </ul>
                            </div>
                           
                            <div className="col-lg-3 col-md-6 footer-list-28 pr-lg-0">
                                <h6 className="footer-title-28">Working Hours</h6>
                                <ul className="working-hours">
                                    <li><span>Monday</span> : 8AM - 6AM</li>
                                    <li><span>Tuesday</span> : 8AM - 6AM</li>
                                    <li><span>Wednesday</span> : 8AM - 6AM</li>
                                    <li><span>Thursday - Friday </span> : 8AM - 6AM</li>
                                    <li><span>Sunday</span> : Closed</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="midd-footer-28 align-center">
                        <p className="copy-footer-28">© 2020 Cleanfreshly. All rights reserved | Designed by <a href="https://w3layouts.com">W3layouts</a></p>
                    </div>
                </div>
                {/* move top */}
                <button  id="movetop" title="Go to top" style={{ display: 'block' }}>
                    <span className="fa fa-angle-up" />
                </button>
                {/* /move top */}
            </footer>
        </div>
    );
}

export default Footer;