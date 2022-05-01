import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";


export default function Register({ url }) {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [finished, setFinished] = useState(false);

  function addUser(e) {
    e.preventDefault();
    const json = JSON.stringify({ fname: fname, lname: lname, email: email, pw: pw });
    axios.post(url + 'user/adduser.php', json, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        setFinished(true);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      });
  }
  if (finished === false) {
    return (
      <Form className="register" onSubmit={addUser}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalName"  >
          <Form.Label column sm={2}>Etunimi
          </Form.Label>
          <Col sm={5}>
            <Form.Control type="name" placeholder="Etunimi" value={fname} onChange={(e) => setFname(e.target.value)} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontallName">
          <Form.Label column sm={2}>Sukunimi
          </Form.Label>
          <Col sm={5}>
            <Form.Control type="name" placeholder="Sukunimi" value={lname} onChange={(e) => setLname(e.target.value)} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>Sähköposti
          </Form.Label>
          <Col sm={5}>
            <Form.Control type="email" placeholder="Sähköposti" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>Salasana
          </Form.Label>
          <Col sm={5}>
            <Form.Control type="password" placeholder="Salasana" value={pw} onChange={(e) => setPw(e.target.value)} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 6, offset: 2 }}>
            <Button type="submit">Rekisteröidy</Button>
          </Col>
        </Form.Group>
      </Form>
    )
  } else {
    return (<h3>Olet rekisteröitynyt!</h3>);
  }
}

