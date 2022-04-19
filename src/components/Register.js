import React from "react";
import Form from 'react-bootstrap/Form'
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Register = () => {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
        <Form.Label column sm={2}>Nimi
        </Form.Label>
        <Col sm={6}>
          <Form.Control type="name" placeholder="Nimi" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>Sähköposti
        </Form.Label>
        <Col sm={6}>
          <Form.Control type="email" placeholder="Sähköposti" />
        </Col>
      </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>Salasana
          </Form.Label>
          <Col sm={6}>
            <Form.Control type="password" placeholder="Salasana" />
          </Col>
        </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 6, offset: 2 }}>
                <Button type="submit">Rekisteröidy</Button>
              </Col>
            </Form.Group>
      </Form>
  )
}
export default Register;
