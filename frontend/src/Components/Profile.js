import React, { useState } from 'react'
import '../profile.css'
import Header from './Header'
import { useNavigate } from 'react-router';


export default function Profile() {

    const [error, seterror] = useState("")
    const [response, setresponse] = useState("")
    const [data, setdata] = useState(JSON.parse(localStorage.getItem('data')|| '[]'))
    const navigate=useNavigate()
    Check();
    const [name, setname] = useState(data['name'])
    const [email, setemail] = useState(data['email'])
    const [mobile, setmobile] = useState(data['mobile'])
    const [location, setlocation] = useState(data['location'])
    const [password, setpassword] = useState("")
    const [oldenteredpass, setoldenteredpass] = useState("")
    const oldpass = data['password']

    const alertsstyle = {
        marginTop: "20px",
        position: "absolute",
        width: "100%"
    };

    function Check()
    {
        console.log(data.length)
        if(data.length==0)
        {

            navigate('/login')
        }
    }

    function SaveChanges() {
        if(password!="")
        {
            if (password.length !== 0) {
                if (oldenteredpass === oldpass) {
                    Change();
                }
                else {
                    seterror("Your Old password and new password was not matched")
                    return;
                }
            }
        }
        else
        {
            const bodydata = JSON.stringify({
                "name": name,
                "mobile": mobile,
                "location": location
            })
            console.log(bodydata)
            fetch(`http://localhost:2500/user/updateuser/${email}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "name": name,
                    "mobile": mobile,
                    "location": location
                })
            })
            .then(async response => {
                const data = await response.json();

                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }

                seterror("")
                setresponse("Profile has been Updated!")
            })
            .catch(error => {
                setresponse("")
                seterror("There was an error forbidden!!!")
            });
        }
    }

    function Change() {
        fetch(`http://localhost:2500/user/updateuser/${email}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name": name,
                "mobile": mobile,
                "location": location,
                "password": password
            })
        })
            .then(async response => {
                const data = await response.json();

                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }

                seterror("")
                setresponse("Profile has been Updated!")
            })
            .catch(error => {
                setresponse("")
                seterror("There was an error forbidden!!!")
            });
    }


    return (
        <div><Header />
            <div className="wrapper bg-white mt-sm-5">
                <div className="container alertsheader">
                {response ?
                    <div style={alertsstyle}>
                        <div className="container alert alert-success" role="alert">
                            {response}
                        </div>
                    </div>
                    : ""}
                {error ?
                    <div style={alertsstyle}>
                        <div className="container alert alert-danger" role="alert">
                            {error}
                        </div>
                    </div>
                    : ""}
                </div>
                <h4 className="pb-4 border-bottom">Account settings</h4>
                <div className="d-flex align-items-start py-3 border-bottom"> <img src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img" alt="" />
                </div>
                <div >
                    <div className="row">
                        <div className="col">
                            <label>user Name</label>
                            <input type="text" className="bg-light form-control" value={name} onChange={(e) => setname(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Email Address</label>
                            <input type="text" className="bg-light form-control" value={email} disabled />
                        </div>
                        <div className="col">
                            <label>Phone Number</label>
                            <input type="tel" className="bg-light form-control" value={mobile} onChange={(e) => setmobile(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label >Address</label>
                            <input type="text" className="bg-light form-control" value={location} onChange={(e) => setlocation(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label >Old Pasword</label>
                            <input type="text" className="bg-light form-control" value={oldenteredpass} onChange={(e) => setoldenteredpass(e.target.value)} />
                        </div>
                        <div className="col">
                            <label >New Password</label>
                            <input type="text" className="bg-light form-control" value={password} onChange={(e) => setpassword(e.target.value)} />
                        </div>
                    </div>

                    <div className="py-3 pb-4 border-bottom">
                        <button className="btn btn-primary" onClick={SaveChanges}>Save Changes</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
