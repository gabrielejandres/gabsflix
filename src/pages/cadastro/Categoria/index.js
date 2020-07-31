/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import './index.css';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);

    clearForm();
  }

  useEffect(() => {
    const includesLocalhost = window.location.hostname.includes('localhost');
    const URL = includesLocalhost ? 'http://localhost:8080/categorias' : 'https://gabsflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (serverResponse) => {
        const response = await serverResponse.json();
        setCategorias([
          ...response,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1> Cadastro de Categoria </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <div className="center">
          <Button className="btn">
            Cadastrar
          </Button>
        </div>
      </form>

      <h2> Categorias cadastradas: </h2>
      {/* loading section */}
      {categorias.length === 0 && (
        <div className="lds-roller">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      )}
      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.titulo}>
            { categoria.titulo }
          </li>
        ))}
      </ul>

      <div className="end">
        <Button as={Link} to="/">
          Ir para home
        </Button>
      </div>
    </PageDefault>
  );
}

export default CadastroCategoria;
