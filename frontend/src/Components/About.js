import React from 'react'
import aboutimg from '../assets/aboutimg.png'
import imran from '../assets/imran.jpg';
import Header from './Header'
import  '../about.css';

export default function About() {
    return (
        <div>
            <Header />
            <div id="about">
                <div className="container">
                    <div className="row flex-center">
                        <div className="col-md-6 col-lg-6">
                            <img src={aboutimg} alt="" className="img-fluid m-b-15" data-aos="fade-up" />
                        </div>
                        <div className="col-md-6 col-lg-5 offset-lg-1">
                            <h1 data-aos="fade-left" data-aos-delay="100"><b>Solve The Problems of Patients</b></h1>
                            <br />
                            <div className="feat">
                                <div className="feat-box" data-aos="fade-left" data-aos-delay="300">
                                    <div className="feat-icon">
                                        <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                                    </div>
                                    <div className="feat-content">
                                        <h5>User</h5>
                                        <p>Users can help the people who requests for the supply of goods or products or dishes, etc..</p>
                                    </div>
                                </div>
                                <div className="feat-box" data-aos="fade-left" data-aos-delay="400">
                                    <div className="feat-icon">
                                        <i className="fa fa-share-square-o fa-2x" aria-hidden="true"></i>
                                    </div>
                                    <div className="feat-content">
                                        <h5>Supply Requests</h5>
                                        <p>who want help from people to supply some thing, and they are charges per distance from source to destination of 
                                            the supplyment</p>
                                    </div>
                                </div>
                                <div className="feat-box" data-aos="fade-left" data-aos-delay="500">
                                    <div className="feat-icon">
                                        <i className="fa fa-unlock-alt fa-2x" aria-hidden="true"></i>
                                    </div>
                                    <div className="feat-content">
                                        <h5>Admin</h5>
                                        <p>take care whether each requests are being succeed or not.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="team">
                <div className="container">
                    <h1 className="text-center" data-aos="fade-up" data-aos-delay="100"><b>Our Team</b></h1>
                    <p className="text-center" data-aos="fade-up" data-aos-delay="200">We are very supportive team</p>
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="team-box" data-aos="fade-left" data-aos-delay="100">
                                <img src={imran} width="100%" height="100%" alt="" />
                                <div className="team-info">
                                    <h4 className="text-muted">P. Irfan Ali Khan</h4>
                                    <p className="primary-color">Backend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="team-box" data-aos="fade-left" data-aos-delay="200">
                                <img src={imran} width="100%" height="100%" alt="" />
                                <div className="team-info">
                                    <h4 className="text-muted">S. Krishna Vamsi</h4>
                                    <p className="primary-color">Backend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="team-box" data-aos="fade-left" data-aos-delay="300">
                                <img src={imran} width="100%" height="100%" alt="" />
                                <div className="team-info">
                                    <h4 className="text-muted">S. Shanmukh Srinivas</h4>
                                    <p className="primary-color">Data Scientist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
