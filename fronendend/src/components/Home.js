import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  Card, Row, Col,  } from 'react-bootstrap';
import { getPeliculas } from "../actions/peliculasActions";
import "../styles/home.css";

const Home = () => {
    const [peliculas, setPeliculas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
    const fetchPeliculas = async () => {
        try {
        const data = await getPeliculas();
        setPeliculas(data);
        } catch (error) {
        console.error("Error fetching movies:", error);
        }
    };
    fetchPeliculas();
    }, []);

    const handleCardClick = (id) => {
        navigate(`/peliculas/${id}`);
    };

    const handleButtonClick = () => {
    window.open("https://www.youtube.com/watch?v=0pdqf4P9MB8", "_blank");
    };

    return (
    <>
        <div className="container-fluid p-5 bg-primary">
        <h1 className="titulo1">La La Land</h1>
        <p className="titulo2">
            Mia y Sebastian son dos jóvenes que quieren abrirse camino en el mundo
            de Hollywood. Mia es una joven aspirante a actriz que trabaja como
            camarera mientras acude a castings y Sebastian toca el piano en bares.
            Un día sus caminos se cruzan e inmediatamente se enamoran. Los dos
            trabajan juntos para hacer realidad sus sueños, pero pronto se dan
            cuenta de que el mundo del arte pide sacrificios que ponen en peligro
            su relación.
        </p>
        <b />
        <button className="firstB" type="button" onClick={handleButtonClick}>
            Ver trailer
        </button>

        </div>

        <div className="container2 mt-8">
        <div className="row-peli">
      {/* Tarjetas de todas las películas */}
      <h3 className="mt-1">Todas las Películas</h3>
      <Row className="mt-4">
        {peliculas.map((pelicula) => (
          <Col key={pelicula.id} sm={6} md={3}>
            <Card className="mb-4" onClick={() => handleCardClick(pelicula.id)} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src={pelicula.imagen} />
              <Card.Body>
                <Card.Title>{pelicula.titulo}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>


            </div>
            </div>

    </>
  );
};

export default Home;
