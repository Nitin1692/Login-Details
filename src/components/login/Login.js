import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './login.css'
import { createLogin } from '../../redux/slices/loginSlice';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createLogin({
            email,
            password
        }))
    }
    
  return (
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email-address" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email-address" required placeholder="name@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" required onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="submit" value="submit" onClick={handleSubmit} />
            </form>  
);
}

export default Login;
