import ApiService from "../apiservice";

class BiService extends ApiService{
    constructor(){
        super("")
    }

    usuarioAtivos(){
        return this.get('/usuarios/ativos')
    }

    usuarioInativos(){
        return this.get('/usuarios/inativos')
    }

    volumeVenda(){
        return this.get('/produtos-anunciados/volume-venda')
    }

    tipoLivro(){
        return this.get('/produtos-anunciados/volume-venda/tipo-livro')
    }

    topUsuariosLogados(){
        return this.get('/usuarios/listar/top-usuarios-logados')
    }

    quantidadeUf(){
        return this.get('/enderecos/quantidade-uf')
    }
}

export default BiService;