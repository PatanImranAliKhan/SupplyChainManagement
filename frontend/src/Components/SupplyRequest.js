import React, { useState } from 'react'
import Header from './Header'
import '../supplyRequest.css'

export default function SupplyRequest() {

    const [source, setsource] = useState("")
    const [destination, setdestination] = useState("")
    const [timereq, settimereq] = useState("")
    // const [waitingtime, setwaitingtime] = useState("")
    const [amount, setamount] = useState("")
    const [distance, setdistance] = useState("")
    const [product, setproduct] = useState("")
    const [productsize, setproductsize] = useState("")
    const [description, setdescription] = useState("")

    const [data, setdata] = useState(JSON.parse(localStorage.getItem('data') || '[]'))
    const [name, setname] = useState(data['name'])
    const [email, setemail] = useState(data['email'])
    const [location, setlocation] = useState(data['location'])
    const [Requests, setRequests] = useState([])
    const [error, seterror] = useState("")

    const style1 = {
        marginBotton: "10px"
    }

    getRequests()

    function getRequests() {
        fetch("http://localhost:2500/supply/all")
            .then(async response => {
                const data = await response.json();

                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }

                seterror("")
                setRequests(data)
            })
            .catch(error => {
                setRequests("")
                // alert("error")
            });
    }

    function Submit() {
        const reqdata = JSON.stringify({
            "email": email,
            "name": name,
            "source": source,
            "destination": destination,
            "distance": distance,
            "timerequired": timereq,
            "product": product,
            "productsize": productsize,
            "amount": amount,
            "description": description
        })
        fetch("http://localhost:2500/supply/addrequest", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: reqdata
        })
            .then(async response => {
                const data = await response.json();

                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }

                seterror("")
                setRequests(data)

            })
            .catch(error => {
                setRequests("")
            });
    }


    return (
        <div>
            <Header />
            <div className="container">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    New Request
                </button>
                {Requests?
                    <div>
                        <div className="row">
                            {/* {Requests.map(details => (
                            <div className="col-sm-6 col-md-6 col-lg-4">
                                
                                <div className="card bg-white p-3 mb-4 shadow">
                                    <div className="d-flex justify-content-between mb-4">
                                        <div className="user-info">
                                            <div className="user-info__img">
                                                <img src={Avatar} alt="profile" />
                                            </div>
                                            <div className="user-info__basic">
                                                <h5 className="mb-0">{details.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="mb-0"><b>Sou: </b><br />
                                        &emsp;&emsp;<p>{details.email}</p></h6>
                                    <h6 className="mb-0"><b>Location: </b><br />
                                        &emsp;&emsp;<p>{details.location}</p></h6>
                                    <div className="d-flex justify-content-between mt-4">
                                        <button className="btn btn-primary" onClick={() => sendRequest(details)}>Send Request</button>
                                    </div>
                                    {details.requestedBy}
                                </div>
                            </div>
                            ))} */}
                        </div>
                        {Requests.map(details => (
                        <div className="row card">
                            <div>
                                <div className="row">
                                    <div className="col">
                                        <h6 className="mb-0"><b>Source: </b>{details.source}</h6>
                                    </div>
                                    <div className="col">
                                        <h6 className="mb-0"><b>Destination: </b>{details.destination}</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6 className="mb-0"><b>Distance: </b>{details.distance}</h6>
                                    </div>
                                    <div className="col">
                                        <h6 className="mb-0"><b>Time required: </b>{details.timerequired}</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6 className="mb-0"><b>Product: </b>{details.product}</h6>
                                    </div>
                                    <div className="col">
                                        <h6 className="mb-0"><b>productsize: </b>{details.productsize}</h6>
                                    </div>
                                </div>
                                {/* <h6 className="mb-0"><b>product: </b>
                                &emsp;&emsp;<p>{details.product}</p></h6>
                                <h6 className="mb-0"><b>Product Size: </b>
                                &emsp;&emsp;<p>{details.productsize}</p></h6>
                                <h6 className="mb-0"><b>Amount: </b>
                                &emsp;&emsp;<p>{details.amount}</p></h6> */}
                            </div>
                        </div>
                        ))
                    }
                    </div>
                :""}
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Supply Request</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="inputmodal">
                                    <input type="text" value={source} className="form-control" placeholder="Source Location" onChange={(e) => { setsource(e.target.value) }} />
                                </div>
                                <div className="inputmodal">
                                    <input type="text" value={destination} className="form-control" placeholder="Destination Location" onChange={(e) => { setdestination(e.target.value) }} />
                                </div>
                                <div className="inputmodal">
                                    <input type="text" value={distance} className="form-control" placeholder="Distance " onChange={(e) => { setdistance(e.target.value) }} />
                                </div>
                                <div className="inputmodal">
                                    <input type="text" value={timereq} className="form-control" placeholder="Timq Req to Travel" onChange={(e) => { settimereq(e.target.value) }} />
                                </div>
                                <div className="inputmodal">
                                    <input type="text" value={product} className="form-control" placeholder="Product" onChange={(e) => { setproduct(e.target.value) }} />
                                </div>
                                <div className="inputmodal">
                                    <input type="text" value={productsize} className="form-control" placeholder="Product Size" onChange={(e) => { setproductsize(e.target.value) }} />
                                </div>
                                <div className="inputmodal">
                                    <input type="number" value={amount} className="form-control" placeholder="Amount " onChange={(e) => { setamount(e.target.value) }} />
                                </div>
                                <div className="inputmodal">
                                    <textarea type="text" value={description} className="form-control" rows="3" placeholder="Description" onChange={(e) => { setdescription(e.target.value) }} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={Submit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
