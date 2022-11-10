import React , { useState } from "react"

export default function Paginacao(){
    const [pagination, setPagination] = useState(0);
    const [rows, setRows] = useState(10);

    const onBasicPageChange = (event) => {
        setPagination(event.first);
        setRows(event.rows);
    }

    return(
        <div className="col-12 d-flex align-items-center justify-content-center">
            <Paginator first={pagination} rows={rows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onBasicPageChange}></Paginator>
        </div>  
    )
}