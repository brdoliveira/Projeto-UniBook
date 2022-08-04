import ApiService from "../apiservice";

class AdministradorService extends ApiService{
    constructor(){
        super("/administradores")
    }

    changePassword(codigo, senhaNova){
        return this.patch(`/alterar/senha-usuario/${codigo}/dkdkdk/${senhaNova}`)
    }    
}

export default AdministradorService;