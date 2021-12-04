import React, {useState} from 'react'
import '../login.css'
import deliver from '../assets/deliveraddress.png'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [response, setresponse] = useState("")
    const [error, seterror] = useState("")

    const history = useNavigate();

    const check=useState(JSON.parse(localStorage.getItem('data')|| '[]'))
    CheckLoginOrNot(check[0])
    function CheckLoginOrNot(check)
    {
        console.log(check.length)
        console.log(check)
        if(check.length!==0)
        {
            history('/home')
        }
    }


    function Submit()
    {
        fetch(`http://localhost:2500/user/login/${email}/${password}`)
        .then(async response => {
            const data = await response.json();

            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            console.log(data)
            seterror("")
            setresponse("login Successfull")
            
            localStorage.setItem('data',JSON.stringify(data[0]))
            setTimeout(() => {
                history('/home')
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
                {response? 
                <div style={alertsstyle}>
                    <div className="container alert alert-success" role="alert">
                        Successfully Loggedin
                    </div>
                </div>
                : ""}
                {error? 
                    <div style={alertsstyle}>
                    <div className="container alert alert-danger" role="alert">
                        {error}
                    </div>
                </div>    
                : ""}
                <div className="container-login">
                    <Link to="/" className="homelink">Home&nbsp;<i class="fa fa-arrow-circle-right" aria-hidden="true"></i></Link>
                    <div className="wrap-login">
                        <div className="login-pic js-tilt" data-tilt>
                            <img src={deliver} alt="IMG" />
                        </div>

                        <div className="login-form validate-form">
                            <span className="login-form-title">
                                Member Login
                            </span>

                            <div className="wrap-input validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input" type="text" name="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" />
                                <span className ="focus-input"></span>
                                <span className ="symbol-input">
                                <i className ="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input validate-input" data-validate="Password is required">
                                <input className="input" type="password" name="pass" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Password" />
                                <span className ="focus-input"></span>
                                <span className ="symbol-input">
                                <i className ="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="container-login-form-btn">
                                <button className="login-form-btn" onClick={Submit}>
                                    Login
                                </button>
                            </div>
                            <br/>
                            <div className="text-center p-t-136">
                                Not an user? &nbsp;
                                <Link className="txt2" to="/register">
                                    Create your Account&nbsp;
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