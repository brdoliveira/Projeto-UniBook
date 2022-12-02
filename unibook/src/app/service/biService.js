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

    vendasMapa(){
        return this.get('/produtos-anunciados/mapa-venda')
    }

    quantidadeVendasRegiao(){
        return this.get('/produtos-anunciados/quantidade-compra-regiao')
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