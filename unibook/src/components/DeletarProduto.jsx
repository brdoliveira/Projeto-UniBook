import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import { mensagemErro } from './Toastr';

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

    const deletarProduto = (id) => {
        console.log(id)
    }

    return(
        <>
            <Button 
                onClick={confirm}             
                icon="pi pi-trash"
                className="p-button-rounded p-button-danger"
                aria-label="Trash"
            />
            <ConfirmDialog />
        </>
    )
}