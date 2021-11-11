import Login from "./components/Login";
import { useState, createContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Main from "./components/Main";
import { BrowserRouter as Router, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.png";

const UserContext = createContext({});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({name: "", email: "", password: ""});

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

            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
            {loggedIn? 
              <Nav className="me-auto">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/transfer" className="nav-link">Transfer</Link>
                <Link to="/details" className="nav-link">Details</Link>
              </Nav>
              :
              null
            }
            </Navbar.Collapse>
          </Container>
        </Navbar>
          {loggedIn? <Main /> : <Login setLoggedIn={setLoggedIn} setUser={setUser} />}
      </Router>
    </UserContext.Provider>
    
  )
}

export default App;
export { UserContext };