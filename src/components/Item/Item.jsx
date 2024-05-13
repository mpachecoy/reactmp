import {React, useContext } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./Item.css";
import Context from "../context/CartContext";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import ItemAdd from "../itemAdd/ItemAdd";


const Item = ({ categoria, nombre, descripcion, precio, img, stock, id  }) => {
  
  const { addItem } = useContext(Context)
  const onAdd = (cantidad) => {
    const item = {
      id,
      nombre,
      precio,
      stock,
      img
    }
    addItem(item, cantidad)
  }

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
              <Link className="btn btn-outline-secondary" to={`/item/${id}`}>Ver mas</Link>
              <ItemAdd onAdd={onAdd}/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Item;
