import React ,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';

import '../contact.css'

import Header from './Header'

export default function Contact() {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [mobile, setmobile] = useState("")
    const [message, setmessage] = useState("")
    const [response, setresponse] = useState("")
    const [error, seterror] = useState("")
    const history=useNavigate();

    function SendFeedback()
    {
        fetch(`http://localhost:2500/feedback/add`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "name": name,
                "email":email,
                "mobile":mobile,
                "message": message
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
                setresponse("Feedback Has been sent Successfully")
                setTimeout(() => {
                    history('')
                }, 2000);
            })
            .catch(error => {
                console.error('There was an error!', error);
                setresponse("")
                seterror("There was an error forbidden!!!")
            });
    }

    const alertsstyle = {
        position: "absolute",
        bottom: "-5vh",
        width: "100%"
        
    };

    return (
        <div>
            <Header/>
            <div className="container-contact">
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
                <div className="contact-form-title"></div>
                <div className="wrap-contact">
                    <span className="contact-form-title-1">
                        Contact Us
                    </span>

                    <span className="contact-form-title-2">
                        Feel free to drop us a line below!
                    </span>
                </div>

                <div className="contact-form validate-form">
                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Full Name:</span>
                        <input className="input100" type="text" name="name" value={name} onChange={(e) => setname(e.target.value)} placeholder="Enter full name" />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                        <span className="label-input100">Email:</span>
                        <input className="input100" type="text" name="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Enter email addess" />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Phone is required">
                        <span className="label-input100">Phone:</span>
                        <input className="input100" type="text" name="phone" value={mobile} onChange={(e) => setmobile(e.target.value)} placeholder="Enter phone number" />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Message is required">
                        <span className="label-input100">Message:</span>
                        <textarea className="input100" name="message" value={message} onChange={(e) => setmessage(e.target.value)} placeholder="Your Comment..."></textarea>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="container-contact-form-btn">
                        <button className="contact-form-btn" onClick={SendFeedback}>
                            <span>
                                Submit &nbsp;
                                <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
