import ApiService from "../apiservice";

class ChatService extends ApiService{
    constructor(){
        super('')
    }

    pegarChat(){
       return this.get(`/Chat`) 
    }

    chatUsuario(idUsuario){
        return this.get(`/Chat/usuario/${idUsuario}`)
    }

    pegarMensagens(){
        return this.get(`/Chat-mensagem`)
    }

    salvarChat(idAnuncioProduto,idUsuarioRemetente){
        return this.postObject(`/Save-chat`,
                                {"idAnuncioProduto": idAnuncioProduto,
                                 "idUsuarioRemetente" : idUsuarioRemetente})
    }


}


export default ChatService;