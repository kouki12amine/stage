import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Login = () => {


    return (
        <div>
            <form className="loginForm" >
                <input
                    placeholder="email"
                    type="email"

                ></input>
                <input
                    placeholder="password"
                    type="password"

                ></input>
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;