import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({ nombre, precio, img, descripcion, categoria,id }) => {

  return (
    <Container className="">
      <Row>
        <Col>
          <Card >
            <Card.Img style={{height: "10rem",}} variant="top" src={img} />
            <Card.Body>
              <Card.Title>{nombre}</Card.Title>
              <Card.Text>{categoria}</Card.Text>
              <Card.Text>${precio}</Card.Text>
              <Link to={`/item/${id}`}><Button className="boton" variant="primary"> Ver mas</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Item;
