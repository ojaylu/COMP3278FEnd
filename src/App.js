import Login from "./components/Login";
import { useState, createContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Main from "./components/Main";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.png";

const UserContext = createContext({});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({name: "", email: "", password: "", lastname: ""});

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Legitimate Bank
            </Navbar.Brand>

            {loggedIn? <Navbar.Toggle />: null}

            {loggedIn?
              <Navbar.Collapse id="basic-navbar-nav">
            
              <Nav className="me-auto">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/transaction" className="nav-link">Make Transaction</Link>
                <Link to="/transhist" className="nav-link">Transaction History</Link>
                <Link to="/details" className="nav-link">Details</Link>
                <Button variant="contained" onClick={() => {setLoggedIn(false)}}>Logout</Button>
              </Nav>
              </Navbar.Collapse>
              :
              null
            }
            
          </Container>
        </Navbar>
          {loggedIn? <Main /> : <Login setLoggedIn={setLoggedIn} setUser={setUser} />}
      </Router>
    </UserContext.Provider>
    
  )
}

export default App;
export { UserContext };