import {React, useContext } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./Item.css";
import Context from "../context/CartContext";
import ItemAdd from "../itemAdd/ItemAdd";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = ({ categoria, nombre, precio, img, stock, id }) => { 
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
    toast.info("Agregaste un producto a tu carrito", {
      theme: "colored"
    })
  }

  return (
    <Container className="h-100 ">
      <Row className="h-100">
        <Col className="h-100">
          <Card className="h-100">
            <Card.Img style={{height: "10rem",}} variant="top" src={img} />
            <Card.Body className="d-flex flex-column justify-content-between">
              <Card.Title>{nombre}</Card.Title>
              <Card.Text>{categoria}</Card.Text>
              <Card.Text>${precio}</Card.Text>
              <div className="btns d-flex flex-column gap-2">
              <hr/>
                <Link className="btn btn-outline-secondary" to={`/item/${id}`}>Ver mas</Link>
                <ItemAdd onAdd={onAdd}/>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <ToastContainer /> */}
    </Container>
  );
};

export default Item;
