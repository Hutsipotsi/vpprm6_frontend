import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'

export default function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            img
            src={require("../images/firsbeegolf.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            img
            src={require("../images/puppyfrisbee.jpg")}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            img
            src={require("../images/disc-golf.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <CardGroup>
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require("../images/westside-discs_bt-origio_pohjan-poika.jpg")} alt="PlaceHolderPicture" />
          <Card.Body>
            <Card.Title>Kiekko Pohjanpoika</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary" id='goToProducts' type='button' href='products/1/'>Kiekot</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require("../images/backpack.png")} alt="PlaceHolderPicture" />
          <Card.Body>
            <Card.Title>Kiekko reppu</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary" id='goToProducts' type='button' href='products/3/'>Reput</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require("../images/disc-golf.jpg")} alt="PlaceHolderPicture" />
          <Card.Body>
            <Card.Title>Kori Target</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary" id='goToProducts' type='button' href='products/2/'>Korit</Button>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup>
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require("../images/disc-golf-bag.jpg")} alt="PlaceHolderPicture" />
          <Card.Body>
            <Card.Title>Kiekko kassi</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary" id='goToProducts' type='button' href='products/3/'>Reput</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require("../images/innova_champion_krait.jpg")} alt="PlaceHolderPicture" />
          <Card.Body>
            <Card.Title>Kiekko Krait</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary" id='goToProducts' type='button' href='products/1/'>Kiekot</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require("../images/disc-golf2.jpg")} alt="PlaceHolderPicture" />
          <Card.Body>
            <Card.Title>Kori Traveler</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary" id='goToProducts' type='button' href='products/2/'>Korit</Button>
          </Card.Body>
        </Card>
      </CardGroup>

    </div>

  );
}
