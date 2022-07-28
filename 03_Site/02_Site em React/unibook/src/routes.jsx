import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import PageLogin from "./pages/PageLogin";
import PageNotFound from "./pages/PageNotFound";
import PagePerfil from "./pages/PagePerfil";
import PageEditarPerfil from "./pages/PageEditarPerfil";
import PageFaleConosco from "./pages/PageFaleConosco";
import PageHome from "./pages/PageHome";
import PageQuemSomos from "./pages/PageQuemSomos";
import PageCadastro from "./pages/PageCadastro";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/" element={<PageHome />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/perfil" element={<PagePerfil />} />
        <Route path="/perfil/editar" element={<PageEditarPerfil />} />
        <Route path="/cadastro" element={<PageCadastro/>} />
        <Route path="/fale-conosco" element={<PageFaleConosco />} />
        <Route path="/quem-somos" element={<PageQuemSomos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
