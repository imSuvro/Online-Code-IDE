import React, { useState } from 'react'
import logo from '../Images/logo.png'
import authPageSide from '../Images/authPageSide.png'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, SetEmail] = useState("");
    const [pwd, SetPwd] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="w-screen min-h-screen flex items-center justify-between pl-[100px]">
                <div className="left w-[35%]">
                    <img className='w-[200px]' src={logo} alt="logo" />
                    <form onSubmit={submitForm} action="" className='w-full mt-[60px]'>
                        <div className="inputBox">
                            <input required type="text" onChange={(e) => { SetEmail(e.target.value) }} value={email} placeholder='Email' />
                        </div>

                        <div className="inputBox">
                            <input required type="password" onChange={(e) => { SetPwd(e.target.value) }} value={pwd} placeholder='Password' />
                        </div>
                        <p className='text-[gray]'>Don't have an account <Link to="/SignUp" className='text-[#00AEEF]'>Sign Up</Link></p>

                        <button className="btnBlue w-full mt-[20px]">Login</button>
                    </form>
                </div>
                <div className="right w-[55%]">
                    <img className='h-[100vh] w-[100%] object-cover' src={authPageSide} alt="authPageSide" />
                </div>
            </div>
        </>
    )
}

export default Login