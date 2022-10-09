import ApiService from "../apiservice";

import ValidacaoService from "./validacaoService";
import ErroValidacao from "../exception/erroValidacao";

class UsuarioService extends ApiService {
  constructor() {
    super("/usuarios");
    this.validacao = new ValidacaoService();
  }

  salvarUsuario(usuario) {
    return this.postObject("", usuario);
  }

  validarUsuario(usuarioInserido) {
    const erros = [];

    if (this.validacao.validarCampo(usuarioInserido.nome)) {
      erros.push("Nome de usuario inválido");
    }

    if (
      this.validacao.validarCampo(usuarioInserido.dataNascimento) ||
      this.validacao.validarData(usuarioInserido.dataNascimento)
    ) {
      erros.push("Data de nascimento inválida");
    }

    if (
      this.validacao.validarCampo(usuarioInserido.cpf) ||
      this.validacao.validarCpf(usuarioInserido.cpf)
    ) {
      erros.push("CPF inválido");
    }

    if (
      this.validacao.validarCampo(usuarioInserido.senha) ||
      this.validacao.validarCampo(usuarioInserido.confirmarSenha)
    ) {
      erros.push("Senha inválida");
    } else if (usuarioInserido.senha === usuarioInserido.confirmarSenha) {
      erros.push("Senhas não são iguais");
    }

    if (this.validacao.validarCampo(usuarioInserido.cep)) {
      erros.push("CEP inválido");
    }

    if (this.validacao.validarCampo(usuarioInserido.numeroResidencia)) {
      erros.push("Numero de endereço inválida");
    }

    if (this.validacao.validarCampo(usuarioInserido.login)) {
      erros.push("Login inválido");
    }

    if (erros && erros.length > 0) {
      throw new ErroValidacao(erros);
    }
  }

  getUsuario(id) {
    return this.get(`/id=${id}`);
  }

  login(email, senha) {
    return this.post(`/login?email=${email}&senha=${senha}`);
  }

  logoff(email, senha) {
    return this.delete(`/logoff?email=${email}&senha=${senha}`);
  }

  filaTopUsuarios() {
    return this.get("/listar/top-usuarios-logados");
  }
}

export default UsuarioService;
