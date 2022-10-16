import ApiService from "../apiservice";

class AdministradorService extends ApiService{
    constructor(){
        super("/administradores")
    }
    
    popularTabela(){
        return fetch("./data.json").then(res => res.json()).then(d => d.data);
    }
}

export default AdministradorService;