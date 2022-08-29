import ApiService from "../apiservice";

class CarrinhosService extends ApiService {
  constructor() {
    super("/carrinhos");
  }

  adicionarProduto(crendencial) {
    return this.post("/adicionar-produto", crendencial);
  }
}

export default CarrinhosService;
