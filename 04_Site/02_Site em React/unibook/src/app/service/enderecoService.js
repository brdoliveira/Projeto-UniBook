import ApiService from "../apiservice";

class EnderecoService extends ApiService {
  constructor() {
    super("/endereco");
  }

  async consultarCEP(cep) {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(function (response) {
        return response.json();
      })
      .then(function (dados) {
        return { dados, success: true };
      })
      .catch(function () {
        return { dados: [], success: false };
      });
  }

  postEndereco(cep, numero) {
    this.post(`?cep=${cep}&numero=${numero}`);
  }
}

export default EnderecoService;
