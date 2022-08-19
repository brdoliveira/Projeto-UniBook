class creditCardService {
    creditCardTypes = {
       'Visa' : {
            'Inicio' : [4],
            'Máximo de número' : [13,16],
            'Máximo de número cvc' : [3]
       },
       'Mastercard' : {
            'Inicio' : [5],
            'Máximo de número' : [16],
            'Máximo de número cvc' : [3]
       },
       'Diners' : {
            'Inicio' : [301,305,36,38],
            'Máximo de número' : [14,16],
            'Máximo de número cvc' : [3]
       },
       'Elo' : {
            'Inicio' : [636368,438935,504175,451416,509048,509067,509049,509069,509050,
                        509074,509068,509040,509045,509051,509046,509066,509047,509042,
                        509052,509043,509064,509040,36297,5067,4576,4011],
            'Máximo de número' : [16],
            'Máximo de número cvc' : [3]
       },
       'Amex' : {
            'Inicio' : [34,37],
            'Máximo de número' : [15],
            'Máximo de número cvc' : [4]
       },
       'Discover' : {
            'Inicio' : [6011,622,64,65],
            'Máximo de número' : [16],
            'Máximo de número cvc' : [4]
       },
       'Aura' : {
            'Inicio' : [50],
            'Máximo de número' : [16],
            'Máximo de número cvc' : [3]
       },
       'jcb' : {
            'Inicio' : [35],
            'Máximo de número' : [16],
            'Máximo de número cvc' : [3]
       },
       'Hipercard' : {
            'Inicio' : [38,60],
            'Máximo de número' : [13,16,19],
            'Máximo de número cvc' : [3]
       }
    }

    listCreditCard = ["Visa","Mastercard","Diners","Elo","Amex","Discover","Aura","jcb","Hipercard"]
}
  
export default creditCardService;
  