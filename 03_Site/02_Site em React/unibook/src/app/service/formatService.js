export class FormatService {
  static formatData(data) {
    var dataFormat =
      data.slice(0, 2) + "/" + data.slice(2, 4) + "/" + data.slice(-4);
    console.log(dataFormat);
    return dataFormat;
  }

  static formatCpf(cpf) {
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  static formatGender(gender){
    if(gender === "F"){
        return "Feminino"
    }else if(gender === "M"){
        return "Masculino"
    }else{
        return "Outros"
    }
  }

  static formatYears(data){
    var dataFormat = this.formatData(data)
    var dataCalc = new Date(dataFormat);
    var dataNow = new Date();
    return dataNow.getFullYear() - dataCalc.getFullYear();
  }
}
