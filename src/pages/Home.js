import axios from "axios";
import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

export default function Home({ url, addToCart }) {
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios
      .get(url + "products/getsale.php")
      .then((response) => {
        const json = response.data;
        if (json) {
          setSales(json.sales);
          setProducts(json.product);
        }
      })
      .catch((error) => {
        alert(error.response === undefined ? error : error.response.data.error);
      });
  }, []);

  return (
    <div>
      <Carousel variant="dark" prevLabel={false} nextLabel={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            img src={require("../images/backpack.png")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Reppu</h3>
            <p>GRIPeq G2 Shoulder Bag</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            img src={require("../images/disc-golf.jpg")}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Kori Target</h3>
            <p>DISCatcher EZ Target</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            img src={require("../images/products/innova_star_boss.jpg")}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Innova Star Boss</h3>
            <p>Innova Star Boss</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <>
        <h3 id="saleText">Viikon tarjoukset</h3>
        <container>
          <CardGroup>
            <Row>
              {sales.slice(0, 4).map((product) => (
                <Col xs={1} className="prodCard">
                  <Card border="warning" style={{ width: "16rem", height: '30rem'}}>
                    <Card.Body>
                      <div key={product.id}>
                        <a href={url + "images/" + product.image}>
                          <Card.Img
                            variant="top"
                            src={url + "images/" + product.image}
                            alt="tuotekuva"
                          />
                        </a>
                        <Card.Title className="title">
                          {product.name}
                        </Card.Title>
                        <Card.Subtitle className="mb-3" id="saleprice">
                          {product.discount} €
                        </Card.Subtitle>
                        <Card.Text>
                          Normaali hinta ilman alennusta {product.price}.
                        </Card.Text>
                        <Button
                          variant="btn btn-warning"
                          id="addCart"
                          type="button"
                          onClick={(e) => addToCart(product)}>
                          Lisää ostoskoriin
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </CardGroup>
        </container>
      </>
    </div>
  );
}
