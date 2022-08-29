import ApiService from "../apiservice";

class CompradorService extends ApiService {
  constructor() {
    super("/compradores");
  }

  cadastrar(novoUsuario) {
    return this.post("/cadastrar", novoUsuario);
  }
}

export default CompradorService;
