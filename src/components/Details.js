import { useContext } from "react";
import { UserContext } from "../App";

function Details () {
    const user = useContext(UserContext);

    return (
        <div class="card">
            <div class="card-header" style={{background: "black", color:"white"}}>
                User Details
            </div>
            <div class="card-body">
                <p>First Name: {user.firstname}</p>
                <p>Last Name: {user.lastname}</p>
            </div>
        </div>

    )
}

export default Details;