import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";


export default function Login({ url, userName, setUserName }) {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [finished, setFinished] = useState(false);

  function checkUser(e) {
    e.preventDefault();
    const json = JSON.stringify({ email: email, pw: pw });
    axios.post(url + 'user/checkuser.php', json, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        const json = response.data;
        setUserName(json.firstname);
        setFinished(true);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      });
  }
  if (finished === false) {
    return (
      <Form className="login" onSubmit={checkUser}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>Sähköposti
          </Form.Label>
          <Col sm={6}>
            <Form.Control type="email" placeholder="Sähköposti" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>Salasana
          </Form.Label>
          <Col sm={6}>
            <Form.Control type="password" placeholder="Salasana" value={pw} onChange={(e) => setPw(e.target.value)} />
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
  } else {
    return (<h3><p>Tervetuloa</p> {userName}!</h3>);
  }
}

