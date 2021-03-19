import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button, Form, Card } from "react-bootstrap";
import FormContainer from "./FormContainer";
import { getFact } from "../actions/GetFactAction";
/**
 * @author
 * @function FormFact
 **/

const FormFact = () => {
  const [animal, setAnimal] = useState("");
  const [numfacts, setNumfacts] = useState("");
  //   const [facts, setFacts] = useState("");
  //   const [factType, setfactType] = useState("");

  const dispatch = useDispatch();

  const Fact = useSelector((state) => state.Fact);
  const { factData } = Fact;

  if (factData) {
    factData.map((item) => {
      console.log(item.text);
    });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(getFact(animal, numfacts));
  };

  return (
    <div>
      <FormContainer>
        <h1>Set Facts you went to see</h1>

        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>Animal</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter animal"
              value={animal}
              onChange={(e) => setAnimal(e.target.value)}
            ></Form.Control>
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
        <div>
          {factData ? (
            factData.map((item) => (
              <Card className="my-3 p-3 rounded" border="light" key={item.text}>
                <Card.Body>
                  <Card.Title as="div">
                    <strong>{item.type}</strong>
                  </Card.Title>
                  <Card.Text as="h3">{item.text}</Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </FormContainer>
    </div>
  );
};

export default FormFact;
