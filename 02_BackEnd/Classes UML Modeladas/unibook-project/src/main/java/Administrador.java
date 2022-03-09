import java.util.List;

public class Administrador extends Usuario implements ICupom{
    public Administrador(String nome, String dataNascimento, char sexo, String cpf,
                         String email, String senha, boolean ativo, String rua,
                         String bairro, String cidade, String estado, String logradouro,
                         int numero, String cep) {
        super(nome, dataNascimento, sexo, cpf, email, senha, ativo, rua,
                bairro, cidade, estado, logradouro, numero, cep);
    }

    //TODO: Adicionar corpo methods

    public void gerarAnalytics(){

    }

    public void removerProduto(ProdutoAnuncio p){

    }

    public void removerUsuario(Usuario u){

    }

    public void alterarSenha(Usuario u){

    }


    @Override
    public List<ProdutoAnuncio> pesquisarProduto() {
        return null;
    }

    @Override
    public void negociar(Usuario u) {

    }

    @Override
    public String gerarCupomDesconto(double desconto) {
        return null;
    }
}
