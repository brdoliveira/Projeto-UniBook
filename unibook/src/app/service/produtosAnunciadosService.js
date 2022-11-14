import ApiService from "../apiservice";

import ValidacaoService from "./validacaoService";
import ErroValidacao from "../exception/erroValidacao";

class ProdutosAnunciadosService extends ApiService {
  constructor() {
    super("/produtos-anunciados");
    this.validacao = new ValidacaoService();
  }

  salvarProduto(produto) {
    return this.postObject("", produto);
  }

  deletarProduto(id){
    return this.delete(`?idAnuncioProduto=${id}`)
  }

  validarProduto(produtoInserido) {
    const erros = [];

    if (this.validacao.validarCampo(produtoInserido.titulo)) {
      erros.push("Titulo do livro inválido");
    }

    if (this.validacao.validarCampo(produtoInserido.autor)) {
      erros.push("Nome do autor inválido");
    }

    if (
      this.validacao.validarCampo(produtoInserido.valor) ||
      this.validacao.validarValor(produtoInserido.valor)
    ) {
      erros.push("Valor do livro inválido");
    }

    if (this.validacao.validarCampo(produtoInserido.estadoUso)) {
      erros.push("Estado de uso inválido");
    }

    if (
      this.validacao.validarCampo(produtoInserido.anoPublicacao) ||
      this.validacao.validarData(produtoInserido.anoPublicacao)
    ) {
      erros.push("Ano publicacao inválido");
    }

    if (this.validacao.validarCampo(produtoInserido.descricao)) {
      erros.push("Descrição inválida");
    }

    if (this.validacao.validarCampo(produtoInserido.idioma)) {
      erros.push("Idioma inválida");
    }

    if (erros && erros.length > 0) {
      throw new ErroValidacao(erros);
    }
  }

  listarTodos(pagina) {
    return this.get(`/listar-todos?pagina=${pagina}&tamanhoPorPagina=12`);
  }

  listarTodosPilha() {
    return this.get("/listar-todos-pilha");
  }

  pesquisarProdutos(idProduto) {
    return this.get(`/listar-todos?idProduto=${idProduto}`);
  }

  foto(idProdutoAnuncio) {
    return this.get(`/foto?idProdutoAnuncio=${idProdutoAnuncio}`);
  }

  alterarFoto(idProdutoAnuncio, novaFoto) {
    return this.post(
      `/alterar-foto?idProdutoAnuncio=${idProdutoAnuncio}&novaFoto=${novaFoto}`
    );
  }

  listarAnunciosPorVendedor(nomeUsuario) {
    return this.get(`/listar-anuncios-por-vendedor?nomeUsuario=${nomeUsuario}`);
  }

  listarAnunciosPorTitulo(titulo) {
    return this.get(`/listar-anuncios-por-titulo?titulo=${titulo}`);
  }
}

export default ProdutosAnunciadosService;
