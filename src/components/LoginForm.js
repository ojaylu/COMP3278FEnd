import React, { useState } from "react";
import Button from "@mui/material/Button";

const style = {
    display: "flex",
    justifyContent: "space-evenly",
    background: "grey",
    alignItems: "center",
    width: "70%",
    padding: 20
};

function LoginForm ({ Login1, error }) {
    const [details, setDetails] = useState({username: "", password: ""});

    const submitHandler = event => {
        event.preventDefault();

        Login1(details);
    }

    return (
        <div style={style}>
            <form onSubmit={submitHandler} style={{flex: "1 1 0"}}>
                <div className="form-inner">
                    <h2>Login</h2>
                    {error? <p>{error}</p>:null}
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="username" id="username" onChange={(event)=>{setDetails({...details, username: event.target.value})}} value={details.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="text" name="password" id="password" onChange={(event)=>{setDetails({...details, password: event.target.value})}} value={details.password} />
                    </div>
                </div>
                <input type="submit" value="Next" />
            </form>
            <p><b>OR</b></p>
            <div style={{flex: "1 1 0", display: "flex", justifyContent: "center"}}>
            <Button variant="contained" sx={{height: 80, width: 80}}>FaceID</Button>
            </div>
            
        </div>
    )
}

export default LoginForm;