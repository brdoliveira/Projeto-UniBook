import ApiService from "../apiservice";

class ChatService extends ApiService{
    constructor(){
        super('')
    }
    
    enviarMensagem(idChat, idAnuncioProduto, idUsuarioRemetente, mensagem){
        return this.postObject('/envia-mensagem', {
            "idChat": idChat,
            "idAnuncioProduto": idAnuncioProduto,
            "idUsuarioRemetente": idUsuarioRemetente,
            "mensagem": mensagem
        })
    }
    
    buscarChat(id){
        return this.get(`/chat?id=${id}`)
    }

    listarChat(idUsuario){
        return this.get(`/chat/usuario?idusuario=${idUsuario}`)
    }

    buscarMensagens(idUsuarioRemetente,idAnuncioProduto){
        return this.get(`/chat/mensagens?idUsuarioRemetente=${idUsuarioRemetente}&idAnuncioProduto=${idAnuncioProduto}`)
    }
    
    salvarChat(idUsuarioRemetente,idAnuncioProduto){
        return this.get(`/chat/mensagens?idUsuarioRemetente=${idUsuarioRemetente}&idAnuncioProduto=${idAnuncioProduto}`)
    }


}


export default ChatService;