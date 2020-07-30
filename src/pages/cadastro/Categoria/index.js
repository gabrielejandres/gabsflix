import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [ categorias, setCategorias ] = useState([]);
    const [ categoria, setCategoria ] = useState(valoresIniciais);
    
    function setCat(chave, valor) {
        setCategoria({
            ...categoria,
            [chave]: valor
        });
    }

    function handleChange(event) {
        setCat(event.target.getAttribute('name'), event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
            ...categorias,
            categoria
        ]);
        
        setCat(valoresIniciais);
    }
    
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

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={indice}>
                             { categoria.nome }
                        </li>
                    );
                })}
            </ul>
           

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );

}

export default CadastroCategoria;