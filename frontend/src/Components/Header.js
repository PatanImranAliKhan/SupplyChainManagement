import React from 'react'
import '../header.css'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <header>
                <section id="navbar">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg">
                            <div className="col-md-6">
                                <Link className="navbar-brand logo" to="#">Supply</Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon">
                                        <i className="fa fa-bars fa-lg"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse col-md-6" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/home">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">AboutUs</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">ContactUs</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Supply Requests</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/friends">Friends</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/profile">profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/logout">Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </section>

            </header>

            {/* <div classNameName="hero" style="background-image: url('images/hero_1.jpg');"></div> */}
        </div>
    )
}
