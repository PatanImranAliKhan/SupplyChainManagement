import React, { useState } from 'react'
import '../friends.css'
import Avatar from '../assets/avatar.png';
import Header from './Header';

export default function Friends() {

    const [newRequests, setnewRequests] = useState([])
    const [friends, setfriends] = useState([])
    const [Requestedusers, setRequestedusers] = useState([])
    const [allusers, setallusers] = useState([])

    const [data, setdata] = useState(JSON.parse(localStorage.getItem('data') || '[]'))
    const [name, setname] = useState(data['name'])
    const [email, setemail] = useState(data['email'])
    const [location, setlocation] = useState(data['location'])
    const [errorRequest1, seterrorRequest1] = useState("")
    const [errorRequest2,seterrorRequest2] = useState("")

    getDetail();
    function getDetail() {
        fetch(`http://localhost:2500/friendrequest/newRequests/${email}`)
            .then(async response => {
                const data = await response.json();

                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                const abc=[data[0]]
                if(data[0]==null)
                {
                    setnewRequests([])
                    seterrorRequest1("No new Requests foryou")
                }
                else
                {
                    setnewRequests([data[0]])
                    seterrorRequest1("")
                }
            })
            .catch(error => {
                console.log('There was an error!', error);
            });

        fetch(`http://localhost:2500/friendrequest/friends/${email}`)
            .then(async response => {
                const data = await response.json();

                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }


                setfriends([data[0]])

            })
            .catch(error => {
                console.log('There was an error!', error);
            });
            fetch(`http://localhost:2500/friendrequest/Requestedusers/${email}`)
            .then(async response => {
                const data = await response.json();

                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }

                setRequestedusers([data[0]])

            })
            .catch(error => {
                console.log('There was an error!', error);
            });

        fetch(`http://localhost:2500/friendrequest/getallusers/${email}`)
            .then(async response => {
                const data = await response.json();

                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }


                setallusers([data[0]])

            })
            .catch(error => {
                console.log('There was an error!', error);
            });

    }

    function sendRequest(data)
    {
        const bodydata = JSON.stringify({
            "requestedBy": email,
            "requestedTo":data.email,
            "username1":name,
            "username2": data.name,
            "sentDate": new Date().toLocaleString(),
            "user1Location":location,
            "user2Location":data.location
        })
        fetch(`http://localhost:2500/friendrequest/addfriends`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: bodydata
        })
            .then(async response => {
                const data = await response.json();

                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                alert(data)
            })
            .catch(error => {
                alert(error)
                console.log('There was an error!', error);
            });
    }


    return (
        <div>
            <Header />
            <section>
                <div className="container">
                    <h1 className="mb-5">Friends</h1>
                    <div className="bg-white shadow rounded-lg d-block d-sm-flex">
                        <div className="tab-content p-4 p-md-5">
                            <div >
                                <h3 className="mb-4">Requestedusers</h3>
                                <div className="row main-content">
                                    {newRequests.map(details => (
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <div className="card bg-white p-3 mb-4 shadow">
                                                <div className="d-flex justify-content-between mb-4">
                                                    <div className="user-info">
                                                        <div className="user-info__img">
                                                            <img src={Avatar} alt="profile" />
                                                        </div>
                                                        <div className="user-info__basic">
                                                            <h5 className="mb-0">{details.username1}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h6 className="mb-0"><b>Email: </b><br />
                                                    &emsp;&emsp;<p>{details.requestedBy}</p></h6>
                                                <h6 className="mb-0"><b>Location: </b><br />
                                                    &emsp;&emsp;<p>{details.user1Location}</p></h6>
                                                <div className="d-flex justify-content-between mt-4">
                                                    <button className="btn btn-primary"><a href="#" className="anchor">Accept</a></button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {errorRequest1}
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr />
                    <hr />

                    <div>
                        <div className="bg-white shadow rounded-lg d-block d-sm-flex">
                            <div className="tab-content p-4 p-md-5">
                                <div >
                                    <h3 className="mb-4">Friends</h3>
                                    <div className="row main-content">
                                        {allusers.map(details => (
                                            <div className="col-sm-6 col-md-6 col-lg-4">
                                                <div className="card bg-white p-3 mb-4 shadow">
                                                    <div className="d-flex justify-content-between mb-4">
                                                        <div className="user-info">
                                                            <div className="user-info__img">
                                                                <img src={Avatar} alt="profile" />
                                                            </div>
                                                            <div className="user-info__basic">
                                                                <h5 className="mb-0">{details['name']}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="mb-0"><b>Email: </b><br />
                                                        &emsp;&emsp;<p>{details.email}</p></h6>
                                                    <h6 className="mb-0"><b>Location: </b><br />
                                                        &emsp;&emsp;<p>{details.location}</p></h6>
                                                    <div className="d-flex justify-content-between mt-4">
                                                        <button className="btn btn-primary" onClick={() => sendRequest(details)}>Send Request</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
