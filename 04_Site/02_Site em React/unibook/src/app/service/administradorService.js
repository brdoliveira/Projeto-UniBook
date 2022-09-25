import ApiService from "../apiservice";

class AdministradorService extends ApiService{
    constructor(){
        super("/administradores")
    }

    changePassword(codigo, senhaNova){
        return this.patch(`/alterar/senha-usuario/${codigo}/dkdkdk/${senhaNova}`)
    }  
    
    popularTabela(){
        return fetch("./data.json").then(res => res.json()).then(d => d.data);
    }
}

export default AdministradorService;