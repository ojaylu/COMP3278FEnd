import React, { useState } from "react";
import LoginForm from "./LoginForm";

function Login ({ setLoggedIn, setUser }) {
    const adminUser = {
        username: "abc",
        password: "abc"
    }

    const [error, setError] = useState("");

    const Login = details => {
        if (details.username == adminUser.username && details.password == adminUser.password) {
            console.log("Logged In");
            setUser({...details});
            setLoggedIn(true);
        } else {
            console.log("Details do not match");
            if (details.username != adminUser.username) {
                setError("user does not exist");
            } else {
                setError("wrong password");
            }
        }
    }

    const Logout = () => {
        console.log("Logout");
    }

    return (
        <div className="App" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <LoginForm Login={Login} error={error} />
        </div>
    )
}

export default Login;
