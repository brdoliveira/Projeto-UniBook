
class ValidacaoService{

    validarCampo(nomeCampo,valor){
        if(nomeCampo === null){ 
            console.log("nome do campo é nulo")
        }else if(valor === null){ 
            console.log("valor é nulo")
        }else{ 
            console.log("campos validados")
        }
    }

    validarData(data){
        dataHoje = Date()

        if( data >= dataHoje){
            console.log("data invalida!")
        }else{
            console.log("data validada!")
        }
    }

    validaTamanhoCampo(nomeCampo,valor,tamanhoMin, tamanhoMax){
        this.validarCampo(nomeCampo,valor)

        if(valor.length >= tamanhoMin || valor.length <= tamanhoMax){
            console.log("campo validado!")
        }else{
            console.log("campo invalido!")
        }
    }

    validarValor(nomeCampo,valor,valorMin){
        if(valor < valorMin){
            console.log("valor invalido!")
        }
    }
}

export default ValidacaoService;