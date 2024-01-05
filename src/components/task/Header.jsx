import React from "react";
import AddTask from "./AddTask";
import { Button, Col, Container, Row } from "react-bootstrap";

const Header = ({ setIsComplete }) => {
  return (
    <header className="my-todos">
      <h1 className="title">My Todo List</h1>
      {/* AddTask Component */}
      <AddTask />
      <Container>
        <Row>
          <Col className="col-6">
            <Button size="sm" mb-3 mt-3 onClick={() => setIsComplete(true)}>
              Tasks Completed
            </Button>
          </Col>
          <Col className="col-6">
            <Button size="sm" mb-3 mt-3 onClick={() => setIsComplete(false)}>
              Tasks Uncompleted
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
