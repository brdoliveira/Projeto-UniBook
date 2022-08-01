package br.com.sptech.apiprojetounibookjava.model.dtos.input;

public class EnderecoDto {

    private String logradouro;
    private String bairro;
    private String localidade;
    private String uf;
    private boolean erro;

    public boolean isErro() {
        return erro;
    }

    public void setErro(boolean erro) {
        this.erro = erro;
    }

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
