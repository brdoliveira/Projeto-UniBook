
class ValidacaoService{

    validarCampo(valor){
        return valor ? false : true 
    }

    validarData(data){
        return data >= Date() ? true : false
    }

    validaTamanhoCampo(valor,tamanhoMin, tamanhoMax){
        return (valor.length >= tamanhoMin || valor.length <= tamanhoMax) ? true : false
    }

    validarValor(valor,valorMin){
        return (valor > valorMin) ? true : false
    }

    validarCpf(cpf){
        const blacklist = [
            '00000000000',
            '11111111111',
            '22222222222',
            '33333333333',
            '44444444444',
            '55555555555',
            '66666666666',
            '77777777777',
            '88888888888',
            '99999999999'
          ]
        
          const cleaned = cpf.replace(/\./g, '').replace('')
        
          if (blacklist.includes(cleaned)) {
            return false
          }
        
          let sum = 0
          let check = 0
        
          // First digit
          for (let i = 1; i <= 9; i++) {
            sum += parseInt(cleaned.substring(i - 1, i)) * (11 - i)
          }
        
          if (
            ((check = (10 * sum) % 11),
            (10 !== check && 11 !== check) || (check = 0),
            check !== parseInt(cleaned.substring(9, 10)))
          ) {
            return false
          }
        
          // Second digit
          sum = 0
          for (let i = 1; i <= 10; i++) {
            sum += parseInt(cleaned.substring(i - 1, i)) * (12 - i)
          }
        
          return (
            (check = (10 * sum) % 11),
            (10 !== check && 11 !== check) || (check = 0),
            check === parseInt(cleaned.substring(10, 11))
          )
    }
}

export default ValidacaoService;