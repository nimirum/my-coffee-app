import React, { FC } from "react";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

interface FormRowProps {
  label: string;
  name: string;
  inputField: any;
}

const FormRow: FC<FormRowProps> = ({ label, name, inputField }) => {
  return (
    <>
      <Form.Group as={Row} controlId={name}>
        <Form.Label column sm="2">
          {label}
        </Form.Label>
        <Col sm="10">{inputField}</Col>
      </Form.Group>
    </>
  );
};

export default FormRow;
