import ApiService from "../apiservice";

class CarrinhosService extends ApiService {
  constructor() {
    super("/carrinhos");
  }

  adicionarProduto(idUsuario,idAnuncioProduto,quantidade) {
    return this.post(`/adicionar-produto?idUsuario=${idUsuario}&idAnuncioProduto=${idAnuncioProduto}&quantidade=${quantidade}`);
  }

  listarProdutos(idUsuario){
    return this.get(`/listar-produtos?idUsuario=${idUsuario}`)
  }

  realizarComprar(idUsuario){
    return this.post(`/realizar-compra?idUsuario=${idUsuario}`)
  }
}

export default CarrinhosService;
