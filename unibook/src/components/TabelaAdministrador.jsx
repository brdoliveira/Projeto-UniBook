// import React , { useState , useEffect} from 'react';
import React from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
//import AdministradorService from '../app/service/administradorService';

export default function TabelaAdministrador(){
    // const [products, setProducts] = useState(jsonDefault);

    const columns = [
        {field: 'id', header: 'Estados'},
        {field: 'code', header: 'Março'},
        {field: 'category', header: 'Abril'},
        {field: 'quantity', header: 'Maio'},
        {field: 'description', header: 'Junho'},
        {field: 'price',header:'Julho'}
    ];

    // const productService = new ProductService();
    // const administradorService = new AdministradorService();

    // useEffect(() => {
    //     administradorService.popularTabela().then(data => setProducts(data));
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    const jsonDefault = {
        "data": [
            {"id": "São Paulo","code": "R$ 599.38","name": "Bamboo Watch","description": "R$ 599,38","image": "bamboo-watch.jpg","price": "R$ 599,38","category": "R$ 599,38","quantity": "R$ 599,38","inventoryStatus": "INSTOCK","rating": 5},
            {"id": "Fortaleza","code": "R$ 155.02","name": "Black Watch","description": "R$ 599,38","image": "black-watch.jpg","price": "R$ 599,38","category": "R$ 599,38","quantity": "R$ 599,38","inventoryStatus": "INSTOCK","rating": 4},
            {"id": "Paraná","code": "R$ 234.89","name": "Blue Band","description": "R$ 599,38","image": "blue-band.jpg","price": "R$ 599,38","category": "R$ 599,38","quantity": "R$ 599,38","inventoryStatus": "LOWSTOCK","rating": 3},
            {"id": "Goiás","code": "R$ 345.78","name": "Blue T-Shirt","description": "R$ 599,38","image": "blue-t-shirt.jpg","price": "R$ 599,38","category": "R$ 599,38","quantity": "R$ 599,38","inventoryStatus": "INSTOCK","rating": 5},
        ]
    } 

    return (
        <div>
            <div className="card">
                <DataTable value={jsonDefault.data} responsiveLayout="scroll">
                {/* <DataTable value={products} responsiveLayout="scroll"> */}
                    {dynamicColumns}
                </DataTable>
            </div>
        </div>
    );
}