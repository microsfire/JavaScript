import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, NavLink, Route} from 'react-router-dom';

import Usuarios from './components/Usuarios/Usuarios';
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario';
import Home from './components/Home/Home';
import Error404 from './components/Error404/Error404';
import DeatalhesUsuario from './components/DeatalhesUsuario/DeatalhesUsuario'


function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><NavLink exact to="/">Inicio</NavLink></li>
            <li><NavLink to="/adicionar">Adicionar Usuarios</NavLink></li>
            <li><NavLink to="/usuarios">Usuarios Cadastrados</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
          <Routes>
            <Route path="usuarios/:id" element={<DeatalhesUsuario/>}/>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/adicionar" element={<AdicionarUsuario/>}/>
            <Route path="/usuarios" element={<Usuarios/>}/>
            <Route path="*" element={<Error404/>}/>
          </Routes>    
      </main>
    </div>
    </Router>
  );
}

export default App;
