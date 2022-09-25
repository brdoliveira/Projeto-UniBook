// import React , { useState , useEffect} from 'react';
import React from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
//import AdministradorService from '../app/service/administradorService';

export default function TabelaAdministrador(){
    // const [products, setProducts] = useState(jsonDefault);

    const columns = [
        {field: 'code', header: 'Code'},
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'quantity', header: 'Quantity'}
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
            {"id": "1000","code": "f230fh0g3","name": "Bamboo Watch","description": "Product Description","image": "bamboo-watch.jpg","price": 65,"category": "Accessories","quantity": 24,"inventoryStatus": "INSTOCK","rating": 5},
            {"id": "1001","code": "nvklal433","name": "Black Watch","description": "Product Description","image": "black-watch.jpg","price": 72,"category": "Accessories","quantity": 61,"inventoryStatus": "INSTOCK","rating": 4},
            {"id": "1002","code": "zz21cz3c1","name": "Blue Band","description": "Product Description","image": "blue-band.jpg","price": 79,"category": "Fitness","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 3},
            {"id": "1003","code": "244wgerg2","name": "Blue T-Shirt","description": "Product Description","image": "blue-t-shirt.jpg","price": 29,"category": "Clothing","quantity": 25,"inventoryStatus": "INSTOCK","rating": 5},
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