import ApiService from "../apiservice";

class UsuarioService extends ApiService {
  constructor() {
    super("/usuarios");
  }

  login(crendencial) {
    return this.post("/login", crendencial);
  }

  logoff(crendencial) {
    return this.delete("/logoff", crendencial);
  }
}

export default UsuarioService;
