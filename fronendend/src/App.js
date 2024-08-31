import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PeliculaForm from './components/PeliculaForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar';
import Home from './components/Home';
import PeliculaDetail from './components/PeliculaDetail';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/peliculas/crear" element={<PeliculaForm />}></Route>
          <Route path="/peliculas/editar/:id" element={<PeliculaForm />}></Route>
          <Route path="/peliculas/:id" element={<PeliculaDetail />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
