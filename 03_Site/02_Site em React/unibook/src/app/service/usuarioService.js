import ApiService from "../apiservice";

class UsuarioService extends ApiService {
  constructor() {
    super("/usuarios");
  }

  salvarUsuario(usuario){
    return this.post(`?usuario=${usuario}`)
  }

  getUsuario(id){
    return this.get(`/id=${id}`)
  }

  login(email,senha) {
    return this.post(`/login?email=${email}&senha=${senha}`);
  }

  logoff(email,senha) {
    return this.delete(`/logoff?email=${email}&senha=${senha}`);
  }

  filaTopUsuarios(){
    return this.get("/listar/top-usuarios-logados")
  }
}

export default UsuarioService;
