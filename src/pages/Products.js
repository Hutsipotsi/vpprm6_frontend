import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'

export default function Products({ url, addToCart }) {
  const [categoryName, setCategoryName] = useState("");
  const [products, setProducts] = useState([]);

  let params = useParams();

  useEffect(() => {
    axios
      .get(url + "products/getproducts.php/" + params.prodcategory)
      .then((response) => {
        const json = response.data;
        setCategoryName(json.productgroup);
        setProducts(json.products);
      })
      .catch((error) => {
        alert(error.response === undefined ? error : error.response.data.error);
      });
  }, [params]);

  return (
    <>
      <h3>{categoryName}</h3>
      <Card border="warning" style={{ width: '18rem' }}>
        <Card.Body>
          {products.map((product) => (
            <div key={product.id}>
              <Card.Img variant="top" src={url + 'images/' + product.image} alt="tuotekuva" />
              <Card.Title>{product.name}</Card.Title>
              <Card.Subtitle className="mb-3">{product.price} €</Card.Subtitle>

              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href={url + 'images/' + product.image}>Iso tuotekuva</Card.Link>
              <Button variant='btn btn-secondary' id='addCart' type='button' onClick={e => addToCart(product)}>Add to cart</Button>
            </div>
          ))}
          </Card.Body>
      </Card>
    </>
  );
}
