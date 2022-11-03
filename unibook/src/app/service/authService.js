import LocalStorageService from "./localStorageService";

export const USUARIO_LOGADO = "_usuario_logado";

export default class AuthService {
  static isUsuarioAutenticado() {
    const usuario = LocalStorageService.obterItem(USUARIO_LOGADO);
    return usuario && usuario.id;
  }

  static removerUsuarioAutenticado = () => {
    LocalStorageService.removerItem(USUARIO_LOGADO);
  }

  static logar(usuario) {
    LocalStorageService.adicionarItem(USUARIO_LOGADO, usuario);
  }

  static async obterUsuarioAutenticado() {
    return await LocalStorageService.obterItem(USUARIO_LOGADO);
  }

  static usuarioTemAutenticacao = () => {
    if(LocalStorageService.obterItem(USUARIO_LOGADO) !== ""){
      return true;
    }else{
      return false;
    }
  }
}
