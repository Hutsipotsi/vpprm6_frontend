import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { Col, Row } from "react-bootstrap";
import DiscSearch from "../components/DiscSearch";

export default function Products({ url, addToCart }) {
  const [categoryName, setCategoryName] = useState("");
  const [products, setProducts] = useState([]);
  //const [discproperties, setDiscproperties] = useState([]);

  let params = useParams();
  let showDiscSearch = params.prodcategory === undefined || params.prodcategory == 1;

  useEffect(() => {
    let address = '';

    if (params.prodcategory !== undefined) {
      address = url + 'products/getproducts.php/' + params.prodcategory;

    } else if (params.searchPhrase !== undefined) {
      address = url + 'products/searchproducts.php/' + params.searchPhrase;
    }
    else {
      address = url + "products/getdiscs.php/?speed=" + params.speed +
        "&glide=" + params.glide +
        "&turn=" + params.turn +
        "&fade=" + params.fade;
    }

    axios.get(address)
      .then((response) => {
        const json = response.data;
        if (params.searchPhrase === undefined) {
          setProducts(json.products);
          setCategoryName(json.productgroup);
        } else if (params.searchPhrase !== undefined) {
          setCategoryName('Tulokset hakusanalla: ' + params.searchPhrase);
          setProducts(json);
        } else {
          setCategoryName(json.productgroup);
          setProducts(json.products);
          //setDiscproperties(json.discproperty);
        }
      })
      .catch((error) => {
        alert(error.response === undefined ? error : error.response.data.error);
      });
  }, [params]);

  function discInfo(product) {
    return (
      <Card.Text>
        Nopeus: {product.speed}<br/>
        Liito: {product.glide}<br/>
        Vakaus: {product.turn}<br/>
        Feidi: {product.fade}<br/>
      </Card.Text>
    );
  }

  function placeholderText() {
    return (
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </Card.Text>
    );
  }

  return (
    <>
      <h2 className="category">{categoryName}</h2>

      <DiscSearch show={showDiscSearch} />
      <div className="container">
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
                        {product.speed !== undefined ? discInfo(product) : placeholderText()}
                      <Button variant='btn btn-warning' id='addCart' type='button' onClick={e => addToCart(product)}>Lisää ostoskoriin</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </CardGroup>
        </div>
    </>
  );
}