import ApiService from "../apiservice";

class FavoritosService extends ApiService {
  constructor() {
    super("/favoritos");
  }

  adicionarFavorito(idUsuario,idAnuncioProduto) {
    return this.post(`/adicionar-favorito?idUsuario=${idUsuario}&idAnuncioProduto=${idAnuncioProduto}`);
  }

  listarProdutos(idUsuario){
    return this.get(`/listar-produtos?idUsuario=${idUsuario}`)
  }
}

export default FavoritosService;
