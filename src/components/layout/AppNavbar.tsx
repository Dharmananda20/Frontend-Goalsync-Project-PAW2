import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function AppNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("AuthToken");
    navigate("/signin", { replace: true });
  };

  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand style={{ cursor: "pointer" }} onClick={() => navigate("/app/goals")}>
          GoalSync
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Button
            variant="outline-primary"
            className="me-2"
            onClick={() => navigate("/app/goals/add")}
          >
            Add Goal
          </Button>

          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
