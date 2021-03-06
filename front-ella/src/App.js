import './App.css';
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import { StartContext } from "./contexts/StartContext";
import Routes from "./Routes";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

import { pathNew } from "./newProject/New";
import { pathOpen } from "./openProject/Open";

let pathProject = "";

export default function App() {

    const nav = useNavigate();

  const [hasStarted, setHasStarted] = useState(false);

  function handleLogout() {
      setHasStarted(false);
      nav("/")
  }

  if (pathNew === '') {
      pathProject = pathOpen;
  }
  else {
        pathProject = pathNew;
  }

  console.log("path = " + pathProject)

  return (
      <div className="App container py-3">
          <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
              <LinkContainer to="/">
                  <Navbar.Brand className="font-weight-bold text-muted" onClick={handleLogout}>
                      Totally Spies
                  </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                  <Nav activeKey={window.location.pathname}>
                      {
                        hasStarted ? (
                            <Nav.Link onClick={handleLogout}>Home</Nav.Link>
                        ) : (
                            <>
                                <LinkContainer to="/open">
                                    <Nav.Link>OPEN</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/new">
                                    <Nav.Link>NEW</Nav.Link>
                                </LinkContainer>
                            </>
                        )
                      }
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
          <StartContext.Provider value={{hasStarted, setHasStarted}}>
              <Routes />
          </StartContext.Provider>
      </div>
  );
}

export { pathProject };