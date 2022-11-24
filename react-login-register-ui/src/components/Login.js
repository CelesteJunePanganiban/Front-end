import React, { Component, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Login () {

    const API_URL = 'http://localhost:5001/v1'
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

const onUsernameChange = (e) => {
    setUsername(e.target.value)
}

const onPasswordChange = (e) => {
    setPassword(e.target.value)
}

  const handleLogin = () => {
    axios.post(`${API_URL}/auth/login`, {
        username,
        password
    }).then((response) => {
        console.log(response.data.data)
        const { accessToken } = response.data.data
        localStorage.setItem('token', accessToken)
        navigate('/dashboard')
    })
  } 
        return (
                <form name="align-right">
                    <h3>Log in</h3>
                    <div className="form-group">
                        <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter Email" onChange={onUsernameChange} value={username}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={onPasswordChange} value={password}/>
                    </div>

                    <div className="form-group mt-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                             <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <div class="d-flex justify-content-center mt-3">
                        <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={()=> handleLogin()}>Sign in</button>
                    </div>

                    <p className="forgot-password text-center">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            
        );
}