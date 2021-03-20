import React, { useState } from "react";
import axios from "axios";
import { Row, Col, Button, Form, Card } from "react-bootstrap";
import FormContainer from "./FormContainer";

/**
 * @author
 * @function FormFact
 **/

const FormFact = () => {
  const [animal, setAnimal] = useState("");
  const [numfacts, setNumfacts] = useState("");
  const [item, setItem] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `https://cat-fact.herokuapp.com/facts/random?animal_type=${animal}&amount=${numfacts}`,
      config
    );
    setItem(data);
    console.log(data);
  };

  return (
    <div>
      <Row>
        <Col sm={6}>
          <FormContainer>
            <h1>Set Facts you went to see</h1>

            <Form onSubmit={submitHandler}>
              <Form.Group>
                <Form.Label>Animal</Form.Label>
                <Form.Control
                  type="text"
                  value={animal}
                  as="select"
                  onChange={(e) => setAnimal(e.target.value)}
                >
                  <option>cat</option>
                  <option>dog</option>
                  <option>horse</option>
                  <option>snail</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Number of Facts</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter No of fats you want to see"
                  value={numfacts}
                  onChange={(e) => setNumfacts(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </Form>
          </FormContainer>
        </Col>
        <Col sm={6}>
          <div>
            <Row>
              {item.map((d) => (
                <Col md={6}>
                  <div className="card justify-content-center p-3" key={d._id}>
                    {d.type === "cat" ? (
                      <h2>{d.type}😺</h2>
                    ) : d.type === "dog" ? (
                      <h2>{d.type}🐶</h2>
                    ) : d.type === "horse" ? (
                      <h2>{d.type}🐴</h2>
                    ) : (
                      <h2>{d.type}🐌</h2>
                    )}
                    <p>{d.text}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FormFact;
