import React, { useState } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router';

export default function Home() {

    const [data, setdata] = useState(JSON.parse(localStorage.getItem('data')|| '[]'))
    const navigate=useNavigate()
    console.log(data)
    Check();

    function Check()
    {
        if(data.length==0)
        {
            navigate('/login')
        }
    }


    return (
        <div>
            <Header />
        </div>
    )
}
