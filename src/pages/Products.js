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
  const [category, setCategory] = useState("");

  let params = useParams();
  let showDiscSearch = params.prodcategory === undefined || params.prodcategory == 1;

  useEffect(() => {
    let address = '';

    if(params.prodcategory !== undefined) {
      address = url + 'products/getproducts.php/' + params.prodcategory;

    }else if(params.searchPhrase !== undefined){
      address = url + 'products/searchproducts.php/' + params.searchPhrase;
    }
    else {
      address = url + "products/getdiscs.php/?nopeus=" + params.nopeus +
      "&liito=" + params.liito +
      "&vakaus=" + params.vakaus +
      "&feidi=" + params.feidi;
    }

    
    axios.get(address)
      .then((response) => {
        const json = response.data;
        if(params.searchPhrase === undefined) {
          setProducts(json.products);
          setCategoryName(json.category);
        }else if(params.searchPhrase !==undefined){
          setCategoryName('Tulokset hakusanalla: ' + params.searchPhrase);
          setProducts(json);
        } else  {
        setCategoryName(json.productgroup);
        setProducts(json.products);
        setDiscproperty(json.discproperty);
      }})
      .catch((error) => {
        alert(error.response === undefined ? error : error.response.data.error);
      });
  }, [params]);

  return (
    <>
    <h2 className="category">Tuoteryhmä {categoryName}</h2>
  
      <DiscSearch show={showDiscSearch}/>
      
      <container> 
      <CardGroup>
        <Row>
          {products.map((product) => (
            <Col xs={1} className="prodCard">
              <Card border="warning" style={{ width: '16rem', height: '32rem' }}>
                <Card.Body>
                  <div key={product.id}>
                    <a href={url + 'images/' + product.image}><Card.Img variant="top" src={url + 'images/' + product.image} alt="tuotekuva" /></a>
                    <Card.Title className="title">{product.name}</Card.Title>
                    <Card.Subtitle className="mb-3" id="price">{product.price} €</Card.Subtitle>
                    <Card.Text> 
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant='btn btn-warning' id='addCart' type='button' onClick={e => addToCart(product)}>Lisää ostoskoriin</Button>
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