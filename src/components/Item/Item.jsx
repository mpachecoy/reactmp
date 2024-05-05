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
    <Container className="h-100">
      <Row className="h-100">
        <Col className="h-100">
          <Card className="h-100">
            <Card.Img style={{height: "10rem",}} variant="top" src={img} />
            <Card.Body>
              <Card.Title>{nombre}</Card.Title>
              <Card.Text>{categoria}</Card.Text>
              <Card.Text>${precio}</Card.Text>
              <Link className="btn btn-secondary" to={`/item/${id}`}>Ver mas</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Item;
