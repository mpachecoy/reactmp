import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ categoria, nombre, descripcion, precio, img, stock }) => {
  const onAdd = (cantidad) => {
    console.log(cantidad);
  };

  return (
    <Container className="contenedor">
      <Row className="">
        <Col className="">
          <Card className="card-detail">
            <div className="card-img">
              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={img} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={img} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={img} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="card-description">
              <Card.Body className="card-information">
                <div className="card-title">
                  <Card.Title>{nombre}</Card.Title>
                  <Card.Text>{descripcion}</Card.Text>
                  <Card.Text>{categoria}</Card.Text>
                  <Card.Text>${precio}</Card.Text>
                </div>
                <hr />
                <ItemCount
                  className="item-count"
                  stock={stock}
                  initialValue={1}
                  onAdd={onAdd}
                />
              </Card.Body>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
