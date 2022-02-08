import React, { useState, FC } from "react";
import { Form } from "react-bootstrap";
import { Coffee } from "../types";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormRow from "./FormRow";

interface CoffeeFormProps {
  onSubmit: (coffee: Coffee) => Promise<void>;
}

const CoffeeForm: FC<CoffeeFormProps> = ({ onSubmit }) => {
  const [coffee, setCoffee] = useState<any>({
    name: "",
    weight: "",
    price: "",
    roast: "",
  });

  const onChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "name":
        setCoffee({ ...coffee, name: event.target.value });
        break;
      case "weight":
        setCoffee({ ...coffee, weight: parseInt(event.target.value) });
        break;
      case "price":
        setCoffee({ ...coffee, price: parseInt(event.target.value) });
        break;
      case "roast":
        setCoffee({ ...coffee, roast: parseInt(event.target.value) });
        break;
      default:
    }
  };

  return (
    <>
      <Row>
        <h2>Add New Coffee</h2>
        <Form>
          <FormRow
            label="Name"
            name="name"
            inputField={
              <Form.Control
                type="text"
                value={coffee.name}
                onChange={(e) => onChangeForm(e as any)}
              />
            }
          />
          <FormRow
            label="Weight (g)"
            name="weight"
            inputField={
              <Form.Control
                type="number"
                value={coffee.weight}
                onChange={(e) => onChangeForm(e as any)}
              />
            }
          />
          <FormRow
            label="Price (€)"
            name="price"
            inputField={
              <Form.Control
                type="number"
                value={coffee.price}
                onChange={(e) => onChangeForm(e as any)}
              />
            }
          />
          <FormRow
            label="Roast"
            name="roast"
            inputField={
              <Form.Control
                type="number"
                value={coffee.roast}
                onChange={(e) => onChangeForm(e as any)}
              />
            }
          />
          <Row>
            <Col lg="4">
              <Button variant="primary" onClick={(e) => onSubmit(coffee)}>
                Add Coffee
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </>
  );
};

export default CoffeeForm;
