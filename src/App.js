import Login from "./components/Login";
import { useState, createContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.png";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({name: "", email: "", password: ""});
  const UserContext = createContext(user);

  return (
    <UserContext.Provider value={user}>
      <Navbar bg="dark" variant="dark">
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
          {loggedIn? 
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            :
            null
          }
        </Container>
      </Navbar>
      {loggedIn? <div>Hi</div> : <Login setLoggedIn={setLoggedIn} setUser={setUser} />}
    </UserContext.Provider>
    
  )
}

export default App;
