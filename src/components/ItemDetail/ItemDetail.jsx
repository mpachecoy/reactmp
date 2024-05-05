import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ categoria, nombre, descripcion, precio, img, stock, id }) => {
  
  const onAdd = (cantidad) => {
    console.log( {cantidad, nombre, categoria, descripcion, precio, id} );
  };

  return (
    <Container className="contenedor">
      <Row>
        <Col>
          <Card className="card-detail">
            <div className="card-img">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1" ></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2" ></li>
                </ol>
                <div className="carousel-inner carrusel-1">
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
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
                  <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
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
                <ItemCount className="item-count" stock={stock} initialValue={1} onAdd={onAdd}/>
              </Card.Body>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
