import ApiService from "../apiservice";

class ChatService extends ApiService{
    constructor(){
        super('')
    }

    pegarChat(){
       return this.get(`/Chat`) 
    }

    chatUsuario(idUsuario){
        return this.get(`/chat/usuario/${idUsuario}`)
    }

    pegarMensagens(){
        return this.get(`/chat-mensagens`)
    }

    salvarChat(idAnuncioProduto,idUsuarioRemetente){
        return this.postObject(`/save-chat`,
                                {"idAnuncioProduto": idAnuncioProduto,
                                 "idUsuarioRemetente" : idUsuarioRemetente})
    }


}


export default ChatService;