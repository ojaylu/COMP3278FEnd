import { useContext } from "react";
import { UserContext } from "../App";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button";
import { waitForDomChange } from "@testing-library/react";

function TransHist () {
    const user = useContext(UserContext);
    const transinfo = [{transid: 1, transdate: "03-12-2021", transtype: "food", transfrom: "030-010-2342-123", transto: "021-24-123-123", transamount: 300, tremarks: "hi"}, 
                     {transid: 2, transdate: "04-12-2021", transtype: "shoe", transfrom: "030-010-2342-123", transto: "021-24-123-123", transamount: 300, tremarks: "hi"}, 
                     {transid: 3, transdate: "05-12-2021", transtype: "poo", transfrom: "030-010-2342-123", transto: "021-24-123-123", transamount: 300, tremarks: "hi"}]

    return (
        <div class="container shadow" style={{paddingLeft:"30px", paddingRight:"30px"}}>
            <h3 style={{paddingBottom: "50px"}}>Transaction History</h3>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>

            {transinfo.map((trans, index) => (
                <Card style={{ width: '30rem', margin: "5px"}} key={index}>
                    <Card.Header>{trans.transdate}</Card.Header>
                
                    <ListGroup variant="flush">
                        <ListGroup.Item>Type: <span text-align="right">{trans.transtype}</span></ListGroup.Item>
                      
                        <ListGroup.Item>Transfer from: {trans.transfrom}</ListGroup.Item>
           
                        <ListGroup.Item>Transfer to: {trans.transto}</ListGroup.Item>
                        <ListGroup.Item>Amount: {trans.transamount} </ListGroup.Item>
                        <ListGroup.Item>Remarks: {trans.tremarks} </ListGroup.Item>
                    </ListGroup>
                </Card>
            ))}
            </div>
             <Button variant="primary" style={{margin:"30px"}}>More Transactions</Button>

        </div>
        
    )
}

export default TransHist;