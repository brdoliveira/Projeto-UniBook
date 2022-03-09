import java.util.List;

public abstract class Usuario {

    private String nome;
    private String dataNascimento;
    private char sexo;
    private String cpf;
    private String email;
    private String senha;
    private boolean ativo;

    public Usuario(String nome, String dataNascimento, char sexo,
                   String cpf, String email, String senha, boolean ativo,
                   String rua, String bairro, String cidade, String estado,
                   String logradouro, int numero, String cep) {

        Endereco endereco = new Endereco(rua, bairro, cidade, estado, logradouro,
                numero, cep);
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
        this.ativo = ativo;
    }

    //TODO: adicionar uma instancia da classe endereco;

    public abstract List<ProdutoAnuncio> pesquisarProduto();


    public abstract void negociar(Usuario u);
        //TODO: adicionar depois um método de negociação




}
