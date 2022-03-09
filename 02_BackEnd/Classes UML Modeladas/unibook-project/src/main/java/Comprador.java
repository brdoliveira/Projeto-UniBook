import java.util.ArrayList;
import java.util.List;

public class Comprador extends Usuario{

    //TODO: Adicionar corpo methods


    private List<ProdutoAnuncio> favoritos;

    public Comprador(String nome, String dataNascimento, char sexo, String cpf,
                     String email, String senha, boolean ativo, String rua,
                     String bairro, String cidade, String estado, String logradouro,
                     int numero, String cep) {
        super(nome, dataNascimento, sexo, cpf, email, senha, ativo, rua,
                bairro, cidade, estado, logradouro, numero, cep);
        this.favoritos = new ArrayList<>();
    }

    public void adicionarFavorito(ProdutoAnuncio p){

    }

    public void removerFavorito(ProdutoAnuncio p){

    }

    public void finalizarCompra(){

    }

    @Override
    public List<ProdutoAnuncio> pesquisarProduto() {
        return null;
    }

    @Override
    public void negociar(Usuario u) {

    }



}
