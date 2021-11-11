import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Transfer from "./Transfer";
import Details from "./Details";

function Main () {
    return (
        <div style={{padding: 30}}>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/transfer" element={<Transfer />} />
                <Route exact path="/details" element={<Details />} />
            </Routes>
        </div>
    )
}

export default Main;