import React from "react";
import "./CartWidget.css";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from 'react-bootstrap/Nav';

const CartWidget = () => {
  return (
    <Container className="">
      <Row className="" xs="">
        <Col className="carrito" >
          <LiaCartArrowDownSolid /><Nav.Link className='patata' href="#link">Carrito</Nav.Link>
        </Col>
      </Row>
    </Container>
  );
};

export default CartWidget;
