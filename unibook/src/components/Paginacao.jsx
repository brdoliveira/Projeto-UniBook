import React , { useState } from "react"
import { Paginator } from 'primereact/paginator';

export default function Paginacao(props){
    const [pagination, setPagination] = useState(0);
    const [rows, setRows] = useState(12);

    const onBasicPageChange = (event) => {
        setPagination(event.first);
        setRows(event.rows);
        onTrigger()
    }

    function onTrigger() {
        props.parentCallback(pagination);
      }

    return(
        <div className="col-12 d-flex align-items-center justify-content-center">
            <Paginator first={pagination} rows={rows} totalRecords={props.totalRecords} rowsPerPageOptions={[12, 24, 36]} onPageChange={onBasicPageChange}></Paginator>
        </div>  
    )
}