import ApiService from "../apiservice";

class ProdutosAnunciadosService extends ApiService {
  constructor() {
    super("/produtos-anuciados");
  }
}

export default ProdutosAnunciadosService;
