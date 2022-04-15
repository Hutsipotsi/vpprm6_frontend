import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import { Col, Row } from "react-bootstrap";
import DiscSearch from "../components/DiscSearch";

export default function Products({ url, addToCart }) {
  const [categoryName, setCategoryName] = useState("");
  const [products, setProducts] = useState([]);
  const [discproperty, setDiscproperty] = useState([]);

  let params = useParams();

  useEffect(() => {
    let address = '';

    if(params.discSearchParams === undefined) {
      address = url + "products/getproducts.php/" + params.prodcategory;
    }
    else {
      address = url + "products/getproducts.php/" + params.prodcategory;
    }
    axios.get(address)
      .then((response) => {
        const json = response.data;
        setCategoryName(json.productgroup);
        setProducts(json.products);
        setDiscproperty(json.discproperty);
      })
      .catch((error) => {
        alert(error.response === undefined ? error : error.response.data.error);
      });
  }, [params]);

  return (
    <>
      <h2 className="category">{categoryName}</h2>

      <DiscSearch class="prodMenu" prodcat={params.prodcategory}/>

      <container>
        <Row>
          {products.map((product) => (
            <Col className="prodCard">
              <Card border="warning" style={{ width: '16rem' }}>
                <Card.Body>
                  <div key={product.id}>
                    <a href={url + 'images/' + product.image}><Card.Img variant="top" src={url + 'images/' + product.image} alt="tuotekuva" /></a>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Subtitle className="mb-3">{product.price} €</Card.Subtitle>
                    <Card.Text> 
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Card.Link href={url + 'images/' + product.image}>Iso tuotekuva</Card.Link>
                    <Button variant='btn btn-secondary' id='addCart' type='button' onClick={e => addToCart(product)}>Add to cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </container>
    </>
  );
}
