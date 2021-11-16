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
        } else {
            console.log("Details do not match");
            if (details.username != adminUser.username) {
                setError("user does not exist");
            } else {
                setError("wrong password");
            }
        }
    }

    return (
        <div className="App" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            {step1? <LoginForm Login1={Login1} error={error} /> : <SecurityQ setLoggedIn={setLoggedIn} setStep1={setStep1} />}
        </div>
    )
}

export default Login;
