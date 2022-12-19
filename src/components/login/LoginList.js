import React from 'react'
import { useSelector } from 'react-redux';

function LoginList() {
    const login = useSelector((state) => state.loginReducer.login)
  return (
    <div>
        {login.map(logi => {
            return <div>
                <h1>{logi.email}</h1>
                <h1>{logi.password}</h1>
            </div>
        })}
    </div>
  )
}

export default LoginList;