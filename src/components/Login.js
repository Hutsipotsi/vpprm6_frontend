import React from "react";
import Form from 'react-bootstrap/Form'
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";


const Login = (uname, password) => {
  return (
    <Form className="login">
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>Sähköposti
        </Form.Label>
        <Col sm={6}>
          <Form.Control type="email" placeholder="Sähköposti" value={uname}/>
        </Col>
      </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>Salasana
          </Form.Label>
          <Col sm={6}>
            <Form.Control type="password" placeholder="Salasana" value={password}/>
          </Col>
        </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col sm={{ span: 6, offset: 2 }}>
              <Form.Check label="Muista minut" />
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 6, offset: 2 }}>
                <Button type="submit">Kirjaudu</Button>
              </Col>
            </Form.Group>
      </Form>
  )
}
export default Login;
