
export class FormatService {
  
  static formatData(date) {
    var data =  new Date(date)
    data = data.getDay() + "/" + data.getMonth() + "/" + data.getFullYear();
    return data;
  }

  static formatYears(data){
    var dataCalc = new Date(data);
    var dataNow = new Date();
    return dataNow.getFullYear() - dataCalc.getFullYear();
  }

  static formatCapitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
