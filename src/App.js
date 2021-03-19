import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import FormFact from "./components/formfact";

function App() {
  return (
    <div className="App mt-3">
      <Container className="">
      <Row>
        <Col md={6}>
          <FormFact />
        </Col>
        
      </Row>
      </Container>
    </div>
  );
}

export default App;
