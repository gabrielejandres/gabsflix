import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';
import img from '../../assets/img/notfound.svg';
import './index.css';
import Button from '../../components/Button';

function NotFound() {
    return (
        <PageDefault>

            <div className="container">
                <img className="girl" src={img} alt="Menina sentada em um 404" />
                <h1> Página não encontrada </h1>
                <p> Verifique se é uma URL válida </p>
                <Button as={Link} to="/">
                    Ir para home
                </Button>
            </div>

        </PageDefault>
    );

}

export default NotFound;