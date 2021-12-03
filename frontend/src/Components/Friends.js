import React from 'react'
import '../friends.css'

export default function Friends() {
    return (
        <div>
            <section className="py-5 my-5">
                <div>
                    <h1 className="mb-5">Account Settings</h1>
                    <div className="bg-white shadow rounded-lg d-block d-sm-flex">
                        <div className="profile-tab-nav border-right">
                            <div className="p-4">
                                <div className="img-circle text-center mb-3">
                                    {/* <img src="img/user2.jpg" alt="Image" className="shadow"> */}
                                </div>
                                <h4 className="text-center">Kiran Acharya</h4>
                            </div>
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link active" id="account-tab" data-toggle="pill" href="#account" role="tab" aria-controls="account" aria-selected="true">
                                    <i className="fa fa-home text-center mr-1"></i>
                                    New Requests
                                </a>
                                <a className="nav-link" id="password-tab" data-toggle="pill" href="#password" role="tab" aria-controls="password" aria-selected="false">
                                    <i className="fa fa-key text-center mr-1"></i>
                                    Requested Users
                                </a>
                                <a className="nav-link" id="security-tab" data-toggle="pill" href="#security" role="tab" aria-controls="security" aria-selected="false">
                                    <i className="fa fa-user text-center mr-1"></i>
                                    Friends
                                </a>
                            </div>
                        </div>
                        <div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
                                <h3 className="mb-4">New Requests</h3>
                                <div className="row">

                                </div>
                            </div>
                            <div className="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
                                <h3 className="mb-4">Requested Users</h3>

                            </div>
                            <div className="tab-pane fade" id="security" role="tabpanel" aria-labelledby="security-tab">
                                <h3 className="mb-4">Security Settings</h3>
                                <div className="row">

                                </div>
                            </div>
                            <div className="tab-pane fade" id="application" role="tabpanel" aria-labelledby="application-tab">
                                <h3 className="mb-4">Application Settings</h3>
                                <div className="row">

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
