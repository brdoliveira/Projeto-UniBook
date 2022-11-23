import ApiService from "../apiservice";

class FeedbackService extends ApiService {
  constructor() {
    super("/feedback");
  }

  avaliarVendedor(idAnuncio, nota) {
    this.post(
      `/avaliar-vendedor?idItemAnuncioProduto=${idAnuncio}&nota=${nota}`
    );
  }

  avaliarComprador(idAnuncio, nota) {
    this.post(
      `/avaliar-comprador?idItemAnuncioProduto=${idAnuncio}&nota=${nota}`
    );
  }

  mediaVendedorAnuncioProduto(idAnuncio) {
    this.get(`/media-vendedor/anuncio-produto?idAnuncioProduto=${idAnuncio}`);
  }

  mediaCompradorAnuncioProduto(idAnuncio) {
    this.get(`/media-comprador/anuncio-produto?idAnuncioProduto=${idAnuncio}`);
  }

  itensAnuncioProduto(idAnuncio) {
    this.get(`/itens-anuncio-produto?idAnuncioProduto=${idAnuncio}`);
  }
}

export default FeedbackService;
