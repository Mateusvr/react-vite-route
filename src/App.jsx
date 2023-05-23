import { useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Cadastro } from "./pages/Cadastro";
import { Sobre } from "./pages/Sobre";
import { Contato } from "./pages/Contato";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <nav>
          <ul>
            <li>
              <Link to="/Cadastro">Cadastro</Link>
            </li>
            <li>
              <Link to="/Sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/Contato">Contato</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
