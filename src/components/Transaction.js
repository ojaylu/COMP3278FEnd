import { useContext } from "react";
import React, { useState } from "react";
import { UserContext } from "../App";
import { render } from 'react-dom';
import Modal from "react-bootstrap/ModalHeader";
import SubmitTrans from "./Modal";
 


import Button from "react-bootstrap/Button";

import { waitForDomChange } from "@testing-library/react";



  

function Transaction () {
    const user = useContext(UserContext);
    const acc = [{accountID: "8087-234-234-234"},{accountID: "253-1645-25-234"},{accountID: "547-234-7456"}, {accountID: "2356-234-643-2"}];
    const [showModal, setShowModal] = useState(false);

    return(

        <div style={{maxWidth:"700px", paddingLeft:"30px", paddingRight:"30px"}}>
            <h3 style={{paddingBottom: "30px"}}>Make a Transaction</h3>
        <form>
        

        <div class="form-group" style={{maxWidth:"700px",paddingBottom:"30px"}}>
          <label for="fromAcc">Tranfer from:</label>
          <select class="form-control" id="fromAcc">
          {acc.map((num, index) =>(
            <option>{num.accountID}</option>
          ))}
          </select>
        </div>

        <div class="form-group" style={{maxWidth:"700px",paddingBottom:"30px"}}>
          <label for="toAcc">Tranfer to:</label>
          <select class="form-control" id="toAcc">
          {acc.map((num, index) =>(
            <option>{num.accountID}</option>
          ))}
          </select>
        </div>

        <div class="form-group" style={{maxWidth:"700px",paddingBottom:"30px"}}>
          <label for="exampleFormControlInput1">Amount: </label>
          <input type="number" class="form-control" id="exampleFormControlInput1">
          </input></div>

        <div class="form-group" style={{maxWidth:"700px",paddingBottom:"30px"}}>
          <label for="Remarks">Remarks: (if any)</label>
          <textarea class="form-control" id="tremarks" rows="3"></textarea>
        </div>
        <button type="subTrans" class="btn btn-primary" onSubmit ={()=> setShowModal(true)} >Submit</button>
        
      <SubmitTrans show={showModal}  onNow={() => setShowModal(false)}/>
    
      </form>
      </div>
    )
    
}




export default Transaction;