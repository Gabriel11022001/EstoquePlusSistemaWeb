import './style.css';
import logo from '../../assets/images/logo.png';
import { RightOutlined, DownOutlined } from '@ant-design/icons';
import { useState } from 'react';

export default function MenuLateral() {

    const [ subMenuGestaoCategoriasAtivo, setSubMenuGestaoCategoriasAtivo ] = useState(false);
    const [ subMenuGestaoProdutosAtivo, setSubMenuGestaoProdutosAtivo ] = useState(false);
    
    const expandirSubMenu = (idElementoSubmenu) => {
        const submenu = document.getElementById(idElementoSubmenu);
        let ativo = false;
        
        if (!submenu.classList.contains('ativo')) {
            submenu.classList.add('ativo');
            ativo = true;
        } else {
            submenu.classList.remove('ativo');
            ativo = false;
        }

        if (ativo) {

            switch (idElementoSubmenu) {
                case 'sub-menu-gestao-categorias':
                    setSubMenuGestaoCategoriasAtivo(true);
                    break;
                case 'sub-menu-gestao-produtos':
                    setSubMenuGestaoProdutosAtivo(true);
                    break;
            }

        } else {

            switch (idElementoSubmenu) {
                case 'sub-menu-gestao-categorias':
                    setSubMenuGestaoCategoriasAtivo(false);
                    break;
                case 'sub-menu-gestao-produtos':
                    setSubMenuGestaoProdutosAtivo(false);
                    break;
            }

        }

    }

    return (
        <div className='menu-lateral'>
            <img src={ logo } className='menu-lateral__logo' alt='Logo do projeto Estoque Plus' />
            <nav className='menu-lateral__nav'>
                <ul className='menu-lateral__nav__lista'>
                    <li className='menu-lateral__nav__lista__item'>
                        <a href='#' className='menu-lateral__nav__lista__item__link'>Home</a>
                    </li>
                    <li className='menu-lateral__nav__lista__item'>
                        <span className='menu-lateral__nav__lista__item__titulo-sub-menu' onClick={ () => expandirSubMenu('sub-menu-gestao-categorias') }>
                            <span>Gestão de categorias</span>
                            { subMenuGestaoCategoriasAtivo ? <RightOutlined color='#ffffff' /> : <DownOutlined color='#ffffff' /> }
                        </span>
                        <nav className='menu-lateral__nav__lista__item__sub-menu' id='sub-menu-gestao-categorias'>
                            <ul className='menu-lateral__nav__lista__item__sub-menu__lista'>
                                <li className='menu-lateral__nav__lista__item__sub-menu__lista__item'>
                                    <a href='#' className='menu-lateral__nav__lista__item__sub-menu__lista__item__link'>Cadastrar categoria</a>
                                </li>
                                <li className='menu-lateral__nav__lista__item__sub-menu__lista__item'>
                                    <a href='#' className='menu-lateral__nav__lista__item__sub-menu__lista__item__link'>Listar categorias</a>
                                </li>
                            </ul>
                        </nav>
                    </li>
                    <li className='menu-lateral__nav__lista__item'>
                        <span className='menu-lateral__nav__lista__item__titulo-sub-menu' onClick={ () => expandirSubMenu('sub-menu-gestao-produtos') }>
                            <span>Gestão de produtos</span>
                            { subMenuGestaoProdutosAtivo ? <RightOutlined color='#ffffff' /> : <DownOutlined color='#ffffff' /> }
                        </span>
                        <nav className='menu-lateral__nav__lista__item__sub-menu' id='sub-menu-gestao-produtos'>
                            <ul className='menu-lateral__nav__lista__item__sub-menu__lista'>
                                <li className='menu-lateral__nav__lista__item__sub-menu__lista__item'>
                                    <a href='#' className='menu-lateral__nav__lista__item__sub-menu__lista__item__link'>Cadastrar produto</a>
                                </li>
                                <li className='menu-lateral__nav__lista__item__sub-menu__lista__item'>
                                    <a href='#' className='menu-lateral__nav__lista__item__sub-menu__lista__item__link'>Listar produtos</a>
                                </li>
                            </ul>
                        </nav>
                    </li>
                    <li className='menu-lateral__nav__lista__item'>
                        <span className='menu-lateral__nav__lista__item__titulo-sub-menu' onClick={ () => expandirSubMenu('sub-menu-gestao-usuarios') }>Gestão de usuários</span>
                        <nav className='menu-lateral__nav__lista__item__sub-menu' id='sub-menu-gestao-usuarios'>
                            <ul className='menu-lateral__nav__lista__item__sub-menu__lista'>
                                <li className='menu-lateral__nav__lista__item__sub-menu__lista__item'>
                                    <a href='#' className='menu-lateral__nav__lista__item__sub-menu__lista__item__link'>Cadastrar usuário</a>
                                </li>
                                <li className='menu-lateral__nav__lista__item__sub-menu__lista__item'>
                                    <a href='#' className='menu-lateral__nav__lista__item__sub-menu__lista__item__link'>Listar usuários</a>
                                </li>
                            </ul>
                        </nav>
                    </li>
                    <li className='menu-lateral__nav__lista__item'>
                        <span className='menu-lateral__nav__lista__item__titulo-sub-menu' onClick={ () => expandirSubMenu('sub-menu-gestao-fornecedores') }>Gestão de fornecedores</span>
                        <nav className='menu-lateral__nav__lista__item__sub-menu' id='sub-menu-gestao-fornecedores'>
                            <ul className='menu-lateral__nav__lista__item__sub-menu__lista'>
                                <li className='menu-lateral__nav__lista__item__sub-menu__lista__item'>
                                    <a href='#' className='menu-lateral__nav__lista__item__sub-menu__lista__item__link'>Cadastrar fornecedor</a>
                                </li>
                                <li className='menu-lateral__nav__lista__item__sub-menu__lista__item'>
                                    <a href='#' className='menu-lateral__nav__lista__item__sub-menu__lista__item__link'>Listar fornecedores</a>
                                </li>
                            </ul>
                        </nav>
                    </li>
                    <li className='menu-lateral__nav__lista__item'>
                        <span className='menu-lateral__nav__lista__item__titulo-sub-menu' onClick={ () => expandirSubMenu('sub-menu-gestao-pedidos') }>Gestão de pedidos</span>
                        <nav className='menu-lateral__nav__lista__item__sub-menu' id='sub-menu-gestao-pedidos'>
                            <ul className='menu-lateral__nav__lista__item__sub-menu__lista'>
                                <li className='menu-lateral__nav__lista__item__sub-menu__lista__item'>
                                    <a href='#' className='menu-lateral__nav__lista__item__sub-menu__lista__item__link'>Realizar pedido</a>
                                </li>
                                <li className='menu-lateral__nav__lista__item__sub-menu__lista__item'>
                                    <a href='#' className='menu-lateral__nav__lista__item__sub-menu__lista__item__link'>Pedidos</a>
                                </li>
                            </ul>
                        </nav>
                    </li>
                    <li className='menu-lateral__nav__lista__item'>
                        <span className='menu-lateral__nav__lista__item__titulo-sub-menu' onClick={ () => expandirSubMenu('sub-menu-gestao-estoque') }>Gestão de estoque</span>
                        <nav className='menu-lateral__nav__lista__item__sub-menu' id='sub-menu-gestao-estoque'>
                            <ul className='menu-lateral__nav__lista__item__sub-menu__lista'>
                                <li className='menu-lateral__nav__lista__item__sub-menu__lista__item'>
                                    <a href='#' className='menu-lateral__nav__lista__item__sub-menu__lista__item__link'>Movimentar estoque</a>
                                </li>
                                <li className='menu-lateral__nav__lista__item__sub-menu__lista__item'>
                                    <a href='#' className='menu-lateral__nav__lista__item__sub-menu__lista__item__link'>Visualizar estoque</a>
                                </li>
                            </ul>
                        </nav>
                    </li>
                    <li className='menu-lateral__nav__lista__item'>
                        <span className='menu-lateral__nav__lista__item__titulo-sub-menu' onClick={ () => expandirSubMenu('sub-menu-gestao-vendas') }>Gestão de vendas</span>
                        <nav className='menu-lateral__nav__lista__item__sub-menu' id='sub-menu-gestao-vendas'>
                            <ul className='menu-lateral__nav__lista__item__sub-menu__lista'>
                                <li className='menu-lateral__nav__lista__item__sub-menu__lista__item'>
                                    <a href='#' className='menu-lateral__nav__lista__item__sub-menu__lista__item__link'>Realizar venda</a>
                                </li>
                                <li className='menu-lateral__nav__lista__item__sub-menu__lista__item'>
                                    <a href='#' className='menu-lateral__nav__lista__item__sub-menu__lista__item__link'>Listar vendas</a>
                                </li>
                            </ul>
                        </nav>
                    </li>
                    <li className='menu-lateral__nav__lista__item'>
                        <a href='#' className='menu-lateral__nav__lista__item__link'>PDV</a>
                    </li>
                    <li className='menu-lateral__nav__lista__item'>
                        <a href='#' className='menu-lateral__nav__lista__item__link'>Relatórios</a>
                    </li>
                    <li className='menu-lateral__nav__lista__item'>
                        <a href='#' className='menu-lateral__nav__lista__item__link'>Perfil</a>
                    </li>
                    <li className='menu-lateral__nav__lista__item'>
                        <a href='#' className='menu-lateral__nav__lista__item__link'>Gráficos</a>
                    </li>
                </ul>
            </nav>
            <button type='button' className='menu-lateral__btn-sair'>Sair</button>
        </div>
    );
}