import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import { Col, Row } from "react-bootstrap";
import DiscSearch from "../components/DiscSearch";
import Products from "./Products";

export default function SaleProducts({ url, addToCart }) {
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);
  const [addingProduct, setAddingProduct] = useState(false);

  useEffect(() => {

    axios.get(url + 'products/getsale.php/')
      .then((response) => {
        const json = response.data;
        if(json) {
          setSales(json.sales);
          setProducts(json.product);
        }
      })
      .catch((error) => {
        alert(error.response === undefined ? error : error.response.data.error);
      });
  }, [sales]);


  return (
    <>
      <h2 className="category">Tarjoukset</h2>
  
      
      <container> 
      <CardGroup>
        <Row>
          {sales.map((product) => (
            <Col xs={1} className="prodCard">
              <Card border="warning" style={{ width: '16rem' }}>
                <Card.Body>
                  <div key={product.id}>
                    <a href={url + 'images/' + product.image}><Card.Img variant="top" src={url + 'images/' + product.image} alt="tuotekuva" /></a>
                    <Card.Title className="title">{product.name}</Card.Title>
                    <Card.Subtitle className="mb-3" id="saleprice">{product.discount} €</Card.Subtitle>
                    <Card.Text> 
                      Normaali hinta ilman alennusta {product.price}.
                    </Card.Text>
                    <Button variant='btn btn-primary' id='addCart' type='button' onClick={e => addToCart(product)}>Add to cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </CardGroup>
      </container>
    </>
  );
}