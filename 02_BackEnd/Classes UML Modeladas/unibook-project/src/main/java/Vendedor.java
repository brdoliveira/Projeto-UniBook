import java.util.List;

public class Vendedor extends Usuario implements ICupom{


    public Vendedor(String nome, String dataNascimento, char sexo,
                    String cpf, String email, String senha, boolean ativo,
                    String rua, String bairro, String cidade, String estado,
                    String logradouro, int numero, String cep) {

        super(nome, dataNascimento, sexo, cpf, email, senha,
                ativo, rua, bairro, cidade, estado, logradouro, numero, cep);
    }

    //TODO: Adicionar corpo methods

    public void adicionarAnuncio(ProdutoAnuncio p){

    }

    public void removerAnuncio(ProdutoAnuncio p){

    }

    public void editarAnuncio(ProdutoAnuncio p, ProdutoAnuncio np){

    }

    public List<ProdutoAnuncio> visualizarAnuncio(ProdutoAnuncio p){
        return null;
    }

    public void gerarAnalise(){

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
