import React, {useState} from 'react'
import '../login.css'
import deliver from '../assets/deliveraddress.png'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
    const [name, setname] = useState("")
    const [mobile, setmobile] = useState("")
    const [location, setlocation] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [response, setresponse] = useState("")
    const [error, seterror] = useState("")

    const history = useNavigate();

    const check=useState(JSON.parse(localStorage.getItem('data')|| '[]'))
    CheckLoginOrNot(check)
    function CheckLoginOrNot(check)
    {
        if(check.length!==0)
        {
            history('/home')
        }
    }

    function Submit() {
        fetch(`http://localhost:2500/user/adduser`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "name": name,
                "email":email,
                "mobile":mobile,
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

                console.log(data)
                seterror("")
                setresponse(data[0])
                setTimeout(() => {
                    history('/login')
                }, 2000);
            })
            .catch(error => {
                console.error('There was an error!', error);
                setresponse("")
                seterror("There was an error forbidden!!!")
            });

    }

    const alertsstyle = {
        marginTop: "20px",
        position: "absolute",
        width: "100%"
    };

    return (

        <div>
            <div className="limiter">
                {response ?
                    <div style={alertsstyle}>
                        <div className="container alert alert-success" role="alert">
                            Successfully Loggedin
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
                <div className="container-login">
                <Link to="/" className="homelink">Home&nbsp;<i class="fa fa-arrow-circle-right" aria-hidden="true"></i></Link>
                    <div className="wrap-signup">
                        <div className="login-pic js-tilt" data-tilt>
                            <img src={deliver} alt="IMG" />
                        </div>

                        <div className="login-form validate-form">
                            <span className="login-form-title">
                                Member Login
                            </span>
                            <div className="wrap-input validate-input" data-validate="Valid name is required: username">
                                <input className="input" type="text" name="name" value={name} onChange={(e) => setname(e.target.value)} placeholder="Username" required/>
                                <span className="focus-input"></span>
                                <span className="symbol-input">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input" type="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" required/>
                                <span className="focus-input"></span>
                                <span className="symbol-input">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input validate-input" data-validate="Valid mobile number is required: 1234567890">
                                <input className="input" type="text" name="monile" value={mobile} onChange={(e) => setmobile(e.target.value)} placeholder="Mobile Number" required/>
                                <span className="focus-input"></span>
                                <span className="symbol-input">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input validate-input" data-validate="Valid Location address is required">
                                <input className="input" type="text" name="location" value={location} onChange={(e) => setlocation(e.target.value)} placeholder="Address" required/>
                                <span className="focus-input"></span>
                                <span className="symbol-input">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input validate-input" data-validate="Password is required">
                                <input className="input" type="password" name="pass" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Password" required/>
                                <span className="focus-input"></span>
                                <span className="symbol-input">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="container-login-form-btn">
                                <button className="login-form-btn" onClick={Submit}>
                                    Login
                                </button>
                            </div>
                            <br />
                            <div className="text-center p-t-136">
                                already an user? &nbsp;
                                <Link className="txt2" to="/login">
                                    Login&nbsp;
                                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
