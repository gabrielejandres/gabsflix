/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import './index.css';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(valoresIniciais);

  function setCat(chave, valor) {
    setCategoria({
      ...categoria,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    setCat(event.target.getAttribute('name'), event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([
      ...categorias,
      categoria,
    ]);

    setCat(valoresIniciais);
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
          value={categoria.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={categoria.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={categoria.cor}
          onChange={handleChange}
        />

        <div className="center">
          <Button>
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
          <li key={categoria.nome}>
            { categoria.nome }
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
