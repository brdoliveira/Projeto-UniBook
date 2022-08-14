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
import PageAdicionarProduto from "./pages/PageAdicionarProduto";
import PageProdutos from "./pages/PageProdutos";
import PageMaisVendidos from "./pages/PageMaisVendidos";
import PageChat from "./pages/PageChat";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/" element={<PageHome />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/perfil" element={<PagePerfil />} />
        <Route path="/perfil/editar" element={<PageEditarPerfil />} />
        <Route path="/perfil/adicionar-produto" element={<PageAdicionarProduto />} />
        <Route path="/cadastro" element={<PageCadastro />} />
        <Route path="/fale-conosco" element={<PageFaleConosco />} />
        <Route path="/quem-somos" element={<PageQuemSomos />} />
        <Route path="/produtos" element={<PageProdutos />} />
        <Route path="/mais-vendidos" element={<PageMaisVendidos />} />
        <Route path="/chat" element={<PageChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
