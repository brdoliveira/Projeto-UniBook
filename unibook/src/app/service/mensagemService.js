import ApiService from "../apiservice";

class MensagemService extends ApiService {
  constructor() {
    super("/mensagens");
  }

  enviarMensagem(mensagem, remententeId, produtoId) {
    return this.postObject("/enviar", {
      mensagem: mensagem,
      remetenteId: remententeId,
      produtoId: produtoId,
    });
  }

  filtrarMensagemRemetenteProduto(remetenteId, produtoId) {
    return this.get(
      `/filtro/remetente-produto?remetenteId=${remetenteId}&produtoId=${produtoId}`
    );
  }

  filtrarMensagemPorProduto(produtoId) {
    return this.get(`/filtro/produto?produtoId=${produtoId}`);
  }
}

export default MensagemService;
