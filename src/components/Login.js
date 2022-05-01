import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
  

const Login = (url, checkUser) => {
  const [email,setEmail] = useState('');
  const [pw,setPw] = useState('');

  function checkUser(e){
    e.preventDefault();
    const json = JSON.stringify({email: email, pw: pw});
    axios.post(url + 'products/checkuser.php',json,{
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then((response) => {
        const checkUser = [...email,response.data];
        setEmail(checkUser);
    }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
    });
} 

  return (
    <Form className="login">
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>Sähköposti
        </Form.Label>
        <Col sm={6}>
          <Form.Control type="email" placeholder="Sähköposti" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Col>
      </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>Salasana
          </Form.Label>
          <Col sm={6}>
            <Form.Control type="password" placeholder="Salasana" value={pw} onChange={(e) => setPw(e.target.value)}/>
          </Col>
        </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col sm={{ span: 6, offset: 2 }}>
              <Form.Check label="Muista minut" />
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 6, offset: 2 }}>
                <Button type="submit" onClick={()=> checkUser(true)}>Kirjaudu</Button>
              </Col>
            </Form.Group>
      </Form>
  )
}
export default Login;
