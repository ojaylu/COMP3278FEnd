import {useState} from "react";

function SecurityQ ({setLoggedIn, setStep1}) {
    const securityQ = "what is your name";
    const securityA = "bob";

    const [ans, setAns] = useState("");
    const [error, setError] = useState();

    const submitHandler = (event) => {
        event.preventDefault();
        if (ans == securityA) {
            setLoggedIn(true);
            setStep1(true);
        } else {
            setError("Wrong Answer!");
        }
    }

    return (
        <div class="card" style={{marginTop: "50px"}}>
            <div class="card-header">
                <h1>Security Question</ h1>
            </div>
            <div class="card-body">
                <form onSubmit={submitHandler}>
                    <div className="form-inner">
                        {error? <p>{error}</p>:null}
                        <div className="form-group">
                            <label htmlFor="name">{securityQ}</label>
                            <br/>
                            <input type="text" onChange={(event)=>{setAns(event.target.value)}} value={ans} />
                        </div>
                    </div>
                    <br/>
                    <input class="btn btn-primary" type="submit" value="Next" />
                </form>
            </div>
        </div>
    )
}

export default SecurityQ;