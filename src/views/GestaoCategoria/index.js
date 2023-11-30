import React, { useEffect, useState } from "react";
import MenuLateral from "../../components/MenuLateral";
import TopoMenuLateralAreaRestrita from "../../components/TopoMenuLateralAreaRestrita";
import './style.css';
import TituloSecaoAreaRestrita from "../../components/TituloSecaoAreaRestrita";
import Loader from "../../components/Loader";

export default function GestaoCategoria() {

    const [ apresentarLoader, setApresentarLoader ] = useState(false);
    const [ categorias, setCategorias ] = useState([
        {
            id: 1,
            descricao: 'Categoria 1',
            status: true
        },
        {
            id: 2,
            descricao: 'Categoria 2',
            status: true
        },
        {
            id: 3,
            descricao: 'Categoria 3',
            status: false
        },
        {
            id: 4,
            descricao: 'Categoria 4',
            status: true
        }
    ]);

    return (
        <main className="container-area-restrita-gestao-categorias">
            <Loader ativo={ apresentarLoader } />
            <MenuLateral />
            <TopoMenuLateralAreaRestrita />
            <TituloSecaoAreaRestrita
            titulo='Gestão de Categorias'
            linksPaginas={ [
                {
                    nomeLink: 'Home',
                    link: '/home'
                },
                {
                    nomeLink: 'Gestão de Categorias',
                    link: '/categorias'
                }
            ] } />
            <section className="container-area-restrita">
                <table className="tabela">
                    <thead className="tabela__cabecalho">
                        <tr className="tabela__cabecalho__linha">
                            <th className="tabela__cabecalho__linha__coluna">Código</th>
                            <th className="tabela__cabecalho__linha__coluna">Descricao</th>
                            <th className="tabela__cabecalho__linha__coluna">Status</th>
                            <th className="tabela__cabecalho__linha__coluna">Operações</th>
                        </tr>
                    </thead>
                    <tbody className="tabela__corpo">
                        { categorias.map((categoria) => {

                            return <tr className="tabela__corpo__linha" key={ categoria.id }>
                                <td className="tabela__corpo__linha__coluna">{ categoria.id }</td>
                                <td className="tabela__corpo__linha__coluna">{ categoria.descricao }</td>
                                <td className={ 'tabela__corpo__linha__coluna coluna-status' + ' ' + (categoria.status ? 'ativo' : 'inativo') }>{ categoria.status ? 'Ativo' : 'Inativo' }</td>
                                <td className="tabela__corpo__linha__coluna">
                                    <a href="#">Visualizar</a>
                                    <a href="#">Editar</a>
                                    <button type="button">Alterar status</button>
                                </td>
                            </tr>
                        }) }
                    </tbody>
                </table>
            </section>
        </main>
    );
}