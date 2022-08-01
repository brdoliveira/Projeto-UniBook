import ApiService from "../apiservice";

class UsuarioService extends ApiService{
    constructor(){
        super("/usuarios")
    }

    login(crendencial){
        return this.post("/login", crendencial)
    }    
}

export default UsuarioService;