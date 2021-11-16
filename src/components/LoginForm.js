import React, { useState } from "react";
import { render } from 'react-dom';
import Button from "@mui/material/Button";

export function getCurrentDate(){

    let myCurrentDate = new Date()
    let date = myCurrentDate.getDate();
    let month = myCurrentDate.getMonth() + 1;
    let year = myCurrentDate.getFullYear();
    let hour = myCurrentDate.getHours();
    let min = myCurrentDate.getMinutes();
    let sec = myCurrentDate.getSeconds();
    
    return `${year} - ${month<10?`0${month}`:`${month}`} - ${date} ${hour}:${min}:${sec}`
    }

const style = {
    display: "flex",
    justifyContent: "space-evenly",
    background: "white",
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
                    <br></br><br></br>
                    <h2>Login</h2>
                    {error? <p>{error}</p>:null}
                    <div className="form-group">
                        <p style={{color: "60, 60, 60 ", fontSize: "70%", textAlign: "left"}}>{ getCurrentDate() }</p>
                        {/*<label htmlFor="username"></label>*/}
                        <input type="text" name="username" id="username" placeholder="Username" onChange={(event)=>{setDetails({...details, username: event.target.value})}} value={details.name} />
                    </div>
                    <div className="form-group">
                        {/*<label htmlFor="password"></label>*/}
                        <input type="password" name="password" id="password" placeholder = "Password"onChange={(event)=>{setDetails({...details, password: event.target.value})}} value={details.password} />
                    </div>
                    <br></br><input type="submit" value="Next" style={{borderRadius: "20%"}}/>
                    <input type="reset" style={{borderRadius: "20%"}}></input>
                </div>
                
            </form>
            <br></br><p style={{textAlign: "center", margin: "30px"}}><b>OR</b></p>
            <div style={{flex: "1 1 0", display: "flex", justifyContent: "center"}}>
                <Button variant="contained" sx={{height: 80, width: 80}} style={{fontSize: "70%"}}>Face ID</Button>
            </div>
            
            
            
        </div>
    )
}

export default LoginForm;