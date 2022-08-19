import { Button } from "primereact/button";

export default function PagamentoPix(){
    return(
        <div className="col-12 d-flex flex-wrap justiy-content-center align-items-center">
            <div className="col-10 d-flex flex-wrap">
                <div className="col-12 fw-bold text-white">Pix</div>
                <div className="col-8">
                    <h1 className="text-white fw-bold">Copie ou escanei o QR CODE</h1>
                    <h2>
                        Ao copiar o código, abra seu aplicativo cadastrado no PIX e 
                        realizado o seu pagamento de forma rápida.
                    </h2>
                </div>
                <div className="col-4 d-flex justify-content-end align items-end">
                    <Button label="Cópiar Código"/>
                </div>
            </div>
        </div>
    )
}