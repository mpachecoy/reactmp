import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import Context from "../context/CartContext";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ categoria, nombre, descripcion, precio, img, stock, id }) => {
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
                <Link className='btn btn-outline-secondary' to='/cart'>Ir al Carrito</Link>
                <Link className='btn btn-secondary' to='/'>SEGUIR COMPRANDO</Link>
              </Card.Body>
            </div>
          </Card>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  )
}

export default ItemDetail;
