import React , { useState } from "react"
import { Paginator } from 'primereact/paginator';

export default function Paginacao(props){
    const [pagination, setPagination] = useState(props.pagina);
    const [rows, setRows] = useState(props.fileira);

    const onBasicPageChange = (event) => {
        onTrigger(event)
        setPagination(event.page);
        setRows(event.rows);
    }

    function onTrigger(event) {
        props.parentCallback({"fileira": event.rows,"pagina" : event.page});
      }

    return(
        <div className="col-12 d-flex align-items-center justify-content-center">
            <Paginator first={pagination} rows={rows} totalRecords={props.totalRecords} rowsPerPageOptions={[12, 24, 36]} onPageChange={onBasicPageChange}></Paginator>
        </div>  
    )
}