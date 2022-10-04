import ApiService from "../apiservice";

class ProdutosAnunciadosService extends ApiService {
  constructor() {
    super("/produtos-anunciados");
  }

  salvarProduto(produto){
    return this.postObject("",produto);
  }

  validarProduto(){
    
  }

  listarTodos(){
    return this.get("/listar-todos")
  }

  listarTodosPilha(){
    return this.get("/listar-todos-pilha")
  }

  pesquisarProdutos(idProduto){
    return this.get(`/listar-todos?idProduto=${idProduto}`)
  }

  foto(idProdutoAnuncio){
    return this.get(`/foto?idProdutoAnuncio=${idProdutoAnuncio}`)
  }

  alterarFoto(idProdutoAnuncio,novaFoto){
    return this.post(`/alterar-foto?idProdutoAnuncio=${idProdutoAnuncio}&novaFoto=${novaFoto}`)
  }

  listarAnunciosPorVendedor(nomeUsuario){
    return this.get(`/listar-anuncios-por-vendedor?nomeUsuario=${nomeUsuario}`)
  }

  listarAnunciosPorTitulo(titulo){
    return this.get(`/listar-anuncios-por-titulo?titulo=${titulo}`)
  }

}

export default ProdutosAnunciadosService;
