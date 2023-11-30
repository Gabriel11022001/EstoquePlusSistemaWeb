import React, { useEffect, useState } from "react";
import './style.css';
import MenuLateral from "../../components/MenuLateral";
import TopoMenuLateralAreaRestrita from "../../components/TopoMenuLateralAreaRestrita";
import Loader from "../../components/Loader";
import TituloSecaoAreaRestrita from "../../components/TituloSecaoAreaRestrita";
import LabelCampo from "../../components/LabelCampo";
import Botao from "../../components/Botao";

export default function CadastroCategoria() {

    const [ apresentarLoader, setApresentarLoader ] = useState(false);
    const [ descricao, setDescricao ] = useState('');

    const apresentarLoaderTempoDeterminado = () => {
        setApresentarLoader(true);
        setTimeout(() => {
            setApresentarLoader(false);
        }, 1500);
    }

    const cadastrarCategoriaProduto = (e) => {
        e.preventDefault();
        console.log(descricao);
    }

    useEffect(() => {
        apresentarLoaderTempoDeterminado();
    }, []);

    return (
        <main className="container-area-restrita-cadastro-categoria">
            <Loader ativo={ apresentarLoader } />
            <MenuLateral />
            <TopoMenuLateralAreaRestrita />
            <TituloSecaoAreaRestrita
            titulo='Cadastro de Categoria'
            linksPaginas={[
                {
                    nomeLink: 'Home',
                    link: '/home'
                },
                {
                    nomeLink: 'Cadastro de Categoria',
                    link: '/categoria/cadastrar'
                }
            ]} />
            <section className="container-area-restrita">
                <form className="formulario" id="formulario-cadastro-categoria">
                    <div className="formulario__grupo gl">
                        <LabelCampo campo='Descrição' obrigatorio={ true } />
                        <input
                        className="formulario__grupo__campo"
                        placeholder="Digite a descrição da categoria..."
                        value={ descricao }
                        onChange={ (e) => setDescricao(e.target.value) }
                        id="descricao" />
                    </div>
                    <Botao
                    texto='Cadastrar'
                    tipo='submite'
                    tipoBotao='botao__azul'
                    executarOperacao={ (e) => cadastrarCategoriaProduto(e) } />
                </form>
            </section>
        </main>
    );
}