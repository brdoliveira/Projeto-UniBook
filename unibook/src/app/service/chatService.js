import ApiService from "../apiservice";

class ChatService extends ApiService{
    constructor(){
        super('/chat')
    }

    buscarChat(id){
        return this.get(`?id=${id}`)
    }

    enviarMensagem(idChat, idAnuncioProduto, idUsuarioRemetente, mensagem){
        return this.postObject('/enviar-mensagem', {
            "idChat": idChat,
            "idAnuncioProduto": idAnuncioProduto,
            "idUsuarioRemetente": idUsuarioRemetente,
            "mensagem": mensagem
        })
    }

    listarChat(idUsuario){
        return this.get(`/usuario?idusuario=${idUsuario}`)
    }

    buscarMensagens(idUsuarioRemetente,idAnuncioProduto){
        return this.get(`/mensagens?idUsuarioRemetente=${idUsuarioRemetente}&idAnuncioProduto=${idAnuncioProduto}`)
    }
    
    salvarChat(idUsuarioRemetente,idAnuncioProduto){
        return this.get(`/mensagens?idUsuarioRemetente=${idUsuarioRemetente}&idAnuncioProduto=${idAnuncioProduto}`)
    }


}


export default ChatService;