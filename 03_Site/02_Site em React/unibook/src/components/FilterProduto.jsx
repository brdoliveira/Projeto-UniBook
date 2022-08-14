import React, { useState } from "react";

import { Divider } from "primereact/divider";
import { Rating } from "primereact/rating";
import { Slider } from "primereact/slider";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from 'primereact/radiobutton';

import EnderecoService from "../app/service/enderecoService";
const service = new EnderecoService();

export default function FilterProduto() {
    const categories = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];
    
    const [valueRating, setValueRating] = useState([0, 100]);
    const [selectedCategory, setSelectedCategory] = useState(categories[1]);
    const [selectedEstado,setSelectedEstado] = useState();
    const estados = service.obterListaEstados();


    return (
      <div className="col-2">
        <h2>Filtrar Por</h2>
        <Divider />
        <h3>Avaliação</h3>
        <span>
          <Rating value={5} readOnly stars={5} cancel={false} />
        </span>
        <span>
          <Rating value={4} readOnly stars={5} cancel={false} />
        </span>
        <span>
          <Rating value={3} readOnly stars={5} cancel={false} />
        </span>
        <span>
          <Rating value={2} readOnly stars={5} cancel={false} />
        </span>
        <span>
          <Rating value={1} readOnly stars={5} cancel={false}/>
        </span>
        <Divider />
        <h3>Faixa de Preço</h3>
        <div className="col-12 d-flex flex-wrap">
          <div className="col-6">
            <p className="text-bold">Min: {valueRating[0]}</p>
          </div>
          <div className="col-6">
            <p className="text-bold">Máx: {valueRating[1]}</p>
          </div>
        </div>
        <div className="col-12">
        <Slider
          value={valueRating}
          onChange={(e) => setValueRating(e.value)}
          range
          />
          </div>
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
          value={selectedEstado}
          options={estados}
          onChange={(e) => setSelectedEstado(e.target.value)}
          className="col-12 border border-0 rounded-pill"
          optionLabel="name"
          placeholder="digite seu estado..."
        />
      </div>
    );
}
