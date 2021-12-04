import React from 'react'
import { useNavigate } from 'react-router'

export default function Logout() {
    const history=useNavigate();
    localStorage.removeItem('data')
    const data=localStorage.getItem('data')
    if(data==null)
    {
        history('/login')
    }
    localStorage.removeItem('data')
    history('/login')
    return (
        <div>
            
        </div>
    )
}
