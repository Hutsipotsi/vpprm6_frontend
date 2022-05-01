import React , { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";


export default function Register ({url, addUser}) {
  const [fname,setFname] = useState('');
  const [lname,setLname] = useState('');
  const [email,setEmail] = useState('');
  const [pw,setPw] = useState('');
  const [user, setUser] = useState('');

  function addUser(e) {
    e.preventDefault();
    const json = JSON.stringify({fname: fname, lname: lname, email: email, pw: pw});
    axios.post(url + 'products/adduser.php',json,{
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then((response) => {
        const addUser = [...fname,response.data];
        setUser(addUser);
    }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
    });
} 
  return (
    <Form className="register">
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalName"  >
        <Form.Label column sm={2}>Etunimi
        </Form.Label>
        <Col sm={5}>
          <Form.Control type="name" placeholder="Etunimi" value={fname} onChange={(e) => setFname(e.target.value)}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontallName">
        <Form.Label column sm={2}>Sukunimi
        </Form.Label>
        <Col sm={5}>
          <Form.Control type="name" placeholder="Sukunimi" value={lname} onChange={(e) => setLname(e.target.value)}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>Sähköposti
        </Form.Label>
        <Col sm={5}>
          <Form.Control type="email" placeholder="Sähköposti" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Col>
      </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>Salasana
          </Form.Label>
          <Col sm={5}>
            <Form.Control type="password" placeholder="Salasana" value={pw} onChange={(e) => setPw(e.target.value)}/>
          </Col>
        </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 6, offset: 2 }}>
                <Button type="submit" onClick={()=> addUser(true)}>Rekisteröidy</Button>
              </Col>
            </Form.Group>
      </Form>
  )
}

