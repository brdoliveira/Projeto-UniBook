import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import { mensagemErro, mensagemSucesso } from './Toastr';
import ProdutosAnunciadosService from '../app/service/produtosAnunciadosService';

const service = new ProdutosAnunciadosService();

export default function DeletarProduto(props){
    const confirm = () => {
        confirmDialog({
            header: "Confirmação exclusão do Produto",
            message: `Tem certeza que deseja excluir o produto ${props.nome}?`,
            acceptLabel: "Sim",
            rejectLabel: "Não",
            accept: () => {deletarProduto(props.id)},
            reject: () => {mensagemErro("Produtos não foi excluido")}
        });
    }

    const deletarProduto = async (id) => {
        await service.deletarProduto(id).then(
            (response) => {
              mensagemSucesso(response.response.data.message)
      
            }
          ).catch(
            (erro) => { mensagemErro("Erro ")}
      
          )
          window.location.reload();
    }


    return(
        <>
            <Button 
                onClick={confirm}             
                icon="pi pi-trash"
                className="p-button-rounded p-button-danger"
                aria-label="Trash"
                key={props.id + 5000 }
            />
            <ConfirmDialog key={props.id + 6000} />
        </>
    )
}