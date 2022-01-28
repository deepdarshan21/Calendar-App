import "./register.css";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Register = () => {
    // const navigate = useNavigate();

    const [registerName, setRegisterName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerRePassword, setRegisterRePassword] = useState("");

    const register = () => {
    //     const { name, email, password, rePassword } = user;
    //     if (name && email && password && password === rePassword) {
    //         // alert("Registered");
    //         axios
    //             .post("https://expense-tracker-deep.herokuapp.com/api/user/register", {
    //                 name: name,
    //                 email: email,
    //                 password: password,
    //             })
    //             .then((res) => {
    //                 // console.log(res);
    //                 alert(res.data.message);
    //                 navigate("/login");
    //             });
    //     } else {
    //         alert("Invalid Input");
    //     }
    };

    const login = () => {
        // navigate("/login");
    };

    return (
        <div className="register-div">
            <div className="register">
                <h1>Register</h1>
                <input
                    type="text"
                    name="name"
                    value={registerName}
                    placeholder="Enter Your Name"
                    onChange={(e) => setRegisterName(e.target.value)}
                />
                <input
                    type="text"
                    name="email"
                    value={registerEmail}
                    placeholder="Enter Your Email"
                    onChange={(e) => setRegisterEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    value={registerPassword}
                    placeholder="Enter Your Password"
                    onChange={(e) => setRegisterPassword(e.target.value)}
                />
                <input
                    type="password"
                    name="rePassword"
                    value={registerRePassword}
                    placeholder="Re-Enter Your Password"
                    onChange={(e) => setRegisterRePassword(e.target.value)}
                />
                <button className="button" onClick={register}>
                    Register
                </button>
                <div>or</div>
                <button className="button" onClick={login}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Register;
