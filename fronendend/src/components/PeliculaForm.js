import React, { useEffect, useState } from "react";
import {useNavigate,useParams} from 'react-router-dom'
import {  getPeliculasById, createPeliculas, updatePeliculas } from "../actions/peliculasActions";
import { Form, Button, Container, Col, Row, Image } from 'react-bootstrap';
import "../styles/peliculaForm.css";

const PeliculaForm = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [pelicula, setPeliculas] = useState({
        titulo: '',
        descripcion: '',
        imagen: null,
});

    useEffect(() => {
        const fetchPeliculas = async() =>{
            try {
                if(id){ 
                const data = await getPeliculasById(id);
                setPeliculas({
                    titulo: data.titulo,
                    descripcion: data.descripcion,
                    imagen: data.imagen ? data.imagen : null,
                });
                }
            }catch(error){
                console.error("error: ", error)
            }
        };
        fetchPeliculas()
    },[id]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "imagen" && files.length > 0) {
        setPeliculas({
            ...pelicula,
            imagen: files[0],
        });
    }else{
        setPeliculas({
            ...pelicula,
            [name]: value,
        });
    }
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            if(id){
                await updatePeliculas(id,pelicula);
            }else{
                await createPeliculas(pelicula)
            }
            navigate('/');
        }catch(error){
            console.error("error: ", error)
        }
    }
    return (
        <Container className="pelicula-form-container mt">
        <h2 className="text-center mb-4">{id ? 'Editar Película' : 'Crear Nueva Película'}</h2>
        <Form onSubmit={handleSubmit}>
            <Row className="mb-10">
                <Col md={12}>
                    <Form.Group controlId="titulo">
                        <Form.Label className="titulo1">Título</Form.Label>
                        <Form.Control
                            type="text"
                            name="titulo"
                            value={pelicula.titulo}
                            onChange={handleChange}
                            placeholder="Ingrese el título de la película"
                            required
                            className="form-control-lg"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={12}>
                    <Form.Group controlId="imagen">
                        <Form.Label  className="titulo1">Imagen</Form.Label>
                        <Form.Control
                            type="file"
                            name="imagen"
                            accept="image/*"
                            onChange={handleChange}
                            className="form-control-lg"
                        />
                        {pelicula.imagen && typeof pelicula.imagen === 'string' && (
                            <div className="mt-3 text-cente">
                                <Image src={pelicula.imagen} alt={pelicula.titulo} fluid rounded />
                            </div>
                        )}
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="descripcion" className="mb-4">
                <Form.Label className="titulo1">Descripción</Form.Label>
                <Form.Control
                    as="textarea"
                    name="descripcion"
                    value={pelicula.descripcion}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Ingrese una descripción para la película"
                    required
                    className="form-control-lg"
                />
            </Form.Group>
            <div className="text-center1">
                <Button variant="primary" type="submit" className="btn-lg">
                    Guardar
                </Button>
            </div>
        </Form>
    </Container>
    );
    
};

export default PeliculaForm;