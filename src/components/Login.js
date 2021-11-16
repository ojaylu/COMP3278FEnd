import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SecurityQ from "./SecurityQ";

function Login ({ setLoggedIn, setUser }) {
    const adminUser = {
        username: "abc",
        password: "abc",
        firstname: "bob"
    }

    const securityAns = "abc";

    const [error, setError] = useState("");
    const [step1, setStep1] = useState(true);

    const Login1 = details => {
        if (details.username == adminUser.username && details.password == adminUser.password) {
            console.log("Logged In");
            setUser({...details, firstname: "bob", lastname: "hi"});
            setStep1(false);
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

    const Login2 = ans => {
        if (ans != securityAns) {
            setError("Wrong answer");
        } else {
            setLoggedIn(true);
        }
    }

    const Logout = () => {
        console.log("Logout");
    }

    

    return (
        <div className="App" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <LoginForm Login1={Login1} error={error} />
        </div>
    )
}

export default Login;
