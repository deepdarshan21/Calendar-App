import "./login.css";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Login = () => {
    // const navigate = useNavigate();

    const [loginName, setLoginName] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = () => {};

    const register = () => {
        // navigate("/register");
    };

    return (
        <div className="login-div">
            <div className="login">
                <h1>Login</h1>
                <input
                    type="text"
                    name="email"
                    value={loginName}
                    placeholder="Enter Your Email"
                    onChange={(e) => setLoginName(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    value={loginPassword}
                    placeholder="Enter Your Password"
                    onChange={(e) => setLoginPassword(e.target.value)}
                />
                <button className="button" onClick={login}>
                    Login
                </button>
                <div>or</div>
                <button className="button" onClick={register}>
                    Register
                </button>
            </div>
        </div>
    );
};

export default Login;
