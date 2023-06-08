import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
export const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Home</h1>
            {/* <button type='button' onClick={() => navigate('/')}></button> */}
            <NavLink to="/"></NavLink>
            <button type='button' onClick={() => navigate('/signup')}>Signup</button>
            <button type='button' onClick={() => navigate('/login')}>Login</button>
        </div>
    )
}
