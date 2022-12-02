import React from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import BiService from "../app/service/biService";

class TabelaAdministradorVolumeVendas extends React.Component{
    constructor() {
        super();
        this.service = new BiService();
        this.state = {
          jsonDefault: []
        };
      }

    componentDidMount(){
        this.service.volumeVenda().then(
            (res) => {
              this.setState({jsonDefault : res.data.map(
                item => { 
                    return {
                        uf : item.uf,
                        soma : item.soma.toFixed(1),
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
        {field: 'soma', header: 'Soma'},
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

export default TabelaAdministradorVolumeVendas;