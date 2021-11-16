import {useState} from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

function SecurityQ ({setLoggedIn, setStep1}) {
    const securityQ = "What is your name?";
    const securityA = "bob";

    const [ans, setAns] = useState("");
    const [error, setError] = useState();

    const submitHandler = () => {
        if (ans == securityA) {
            setLoggedIn(true);
            setStep1(true);
        } else {
            setError("Wrong Answer!");
        }
    }

    return (
        <div style={{width: "50%"}}>
            <div  style={{marginTop: "50px", marginBottom: "30px"}}>
                <h3>Security Question</ h3>
            </div>
            <div class="container shadow" style={{padding: "30px", display: "flex", flexDirection: "column", alignItems: "center", minWidth: "300px"}}>
                {error? <p>{error}</p>:null}
                    <h4>{securityQ}</h4>
                    <br/>
                    <Input color="primary" onChange={(event)=>{setAns(event.target.value)}} value={ans} sx={{margin: "10px"}} />
                    <br/>
                    <Button variant="contained" onClick={submitHandler} sx={{marginTop: "10px"}}>Next</Button>
            </div>
        </div>
    )
}

export default SecurityQ;