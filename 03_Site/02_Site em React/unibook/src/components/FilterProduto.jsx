import React, { useState } from "react";

import { Divider } from "primereact/divider";
import { Rating } from "primereact/rating";
import { Slider } from "primereact/slider";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from 'primereact/radiobutton';

import EnderecoService from "../app/service/enderecoService";

class FilterProduct extends React.Component {
  constructor() {
    super();
    this.enderecoService = new EnderecoService();
  }

  state = {
    cidade: "",
    estado: "",
    logradouro: "",
    numero: "",
    cep: "",
    complemento: "",
  };

  render() {
    const estados = this.enderecoService.obterListaEstados();

    const [valueRating, setValueRating] = useState([0, 100]);

    const categories = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];
    const [selectedCategory, setSelectedCategory] = useState(categories[1]);

    return (
      <div className="col-4">
        <h2>Filtrar Por</h2>
        <Divider />
        <h3>Avaliação</h3>
        <p>
          <Rating value={5} readOnly stars={5} cancel={false} /> 5
        </p>
        <p>
          <Rating value={4} readOnly stars={5} cancel={false} /> 4
        </p>
        <p>
          <Rating value={3} readOnly stars={5} cancel={false} /> 3
        </p>
        <p>
          <Rating value={2} readOnly stars={5} cancel={false} /> 2
        </p>
        <p>
          <Rating value={1} readOnly stars={5} cancel={false} /> 1
        </p>
        <Divider />
        <h3>Faixa de Preço</h3>
        <div className="col-12 d-flex flex-wrap">
          <div className="col-6">
            <p className="text-bold">Min:</p>
            <p>{value[0]}</p>
          </div>
          <div className="col-6">
            <p className="text-bold">Máx:</p>
            <p>{value[1]}</p>
          </div>
        </div>
        <Slider
          value={valueRating}
          onChange={(e) => setValueRating(e.value)}
          range
        />
        <Divider />
        <h3>Etiqueta</h3>
        {categories.map((category) => {
          return (
            <div key={category.key} className="field-radiobutton">
              <RadioButton
                inputId={category.key}
                name="category"
                value={category}
                onChange={(e) => setSelectedCategory(e.value)}
                checked={selectedCategory.key === category.key}
                disabled={category.key === "R"}
              />
              <label htmlFor={category.key}>{category.name}</label>
            </div>
          );
        })}
        <Divider />
        <h3>Estado</h3>
        <Dropdown
          value={this.state.estado}
          options={estados}
          onChange={(e) => this.setState({ estado: e.target.value })}
          className="col-12 border border-0 rounded-pill"
          optionLabel="name"
          placeholder="digite seu estado..."
        />
      </div>
    );
  }
}

export default FilterProduct;
