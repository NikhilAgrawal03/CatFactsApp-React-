import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import FormFact from "./components/fact";

function App() {
  return (
    <div className="App mt-3" style={{ backgroundColor: "rgb(247, 225, 197)" }}>
      <Container className="">
        <Row>
          <Col md={12}>
            <FormFact />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
