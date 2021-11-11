import { useContext } from "react";
import { UserContext } from "../App";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Home () {
    const user = useContext(UserContext);
    const accounts = [{accountID: 1, balance: 100, accountName: "saving"}, {accountID: 2, balance: 100, accountName: "current"}, {accountID: 3, balance: 100, accountName: "credit card"}, {accountID: 4, balance: 100, accountName: "saving 2"}];

    function Account (index) {
        return (
            <div key={index}>
                <Card style={{ width: '100px' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )

    }

    return (
        <div>
            <h3 style={{paddingBottom: "50px"}}>Welcome, {user.firstname}</h3>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
            {accounts.map((account, index) => (
                <Card style={{ width: '15rem', margin: "10px"}} key={index}>
                    <Card.Body style={{background: "LightGray"}}>
                        <Card.Title>{account.accountName}</Card.Title>
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                </Card>
            ))}
            </div>
        </div>
    )
}

export default Home;