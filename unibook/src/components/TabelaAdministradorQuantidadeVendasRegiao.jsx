import React from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import BiService from "../app/service/biService";

class TabelaAdministradorQuantidadeVendasRegiao extends React.Component{
    constructor() {
        super();
        this.service = new BiService();
        this.state = {
          jsonDefault: []
        };
      }

    componentDidMount(){
        this.service.quantidadeVendasRegiao().then(
            (res) => {
              this.setState({jsonDefault : res.data.map(
                item => { 
                    return {
                        uf : item.uf,
                        quantidade : item.quantidade,
                        mes : item.mes
                    }
                }
              )});
            }
          )
    }

    render(){

    const columns = [
        {field: 'uf', header: 'Unidade Federativa'},
        {field: 'mes', header: 'Mês'},
        {field: 'quantidade', header: 'Quantidades'},
    ];


    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div>
            <div className="card">
                <DataTable value={this.state.jsonDefault} responsiveLayout="scroll">
                    {dynamicColumns}
                </DataTable>
            </div>
        </div>
    );
    }
}

export default TabelaAdministradorQuantidadeVendasRegiao;