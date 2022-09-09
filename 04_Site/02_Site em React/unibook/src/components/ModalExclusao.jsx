import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';

export default function ModalExclusao(props){
    const confirm = () => {
        confirmDialog({
            message: props.message ? props.message : "Tem certeza que que exluir a lista?",
            header: props.header ? props.header : "Confirmação exclusão",
            acceptLabel: "Sim",
            rejectLabel: "Não",
            accept: () => console.log("AAAAA"),
            reject: () => console.log("BBBBB")
        });
    }

    return(
        <>
            <Button 
                onClick={confirm}             
                icon="pi pi-trash"
                className="p-button-rounded bg-orange border border-3 border-dark text-dark"
                aria-label="Trash"
            />
            <ConfirmDialog />
        </>
    )
}