package br.com.sptech.apiprojetounibookjava.model.dtos.input;

public class EnderecoDto {

    private String logradouro;
    private String bairro;
    private String localidade;
    private String uf;

    public String getLogradouro() {
        return logradouro;
    }

    public String getBairro() {
        return bairro;
    }

    public String getLocalidade() {
        return localidade;
    }

    public String getUf() {
        return uf;
    }
}
