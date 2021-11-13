import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import TransHist from "./TransHist";
import Details from "./Details";
import Transaction from "./Transaction";

function Main () {
    return (
        <div style={{padding: 30}}>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/transaction" element={<Transaction/>} />
                <Route exact path="/transhist" element={<TransHist />} />
                <Route exact path="/details" element={<Details />} />
            </Routes>
        </div>
    )
}

export default Main;