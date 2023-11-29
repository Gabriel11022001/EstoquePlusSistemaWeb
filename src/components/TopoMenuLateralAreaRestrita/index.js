import './style.css';
import imgUserPadrao from '../../assets/images/user.png';
import { CaretDownOutlined } from '@ant-design/icons';

export default function TopoMenuLateralAreaRestrita() {

    return (
        <div className='topo-menu-lateral-area-restrita'>
            <h5 className='topo-menu-lateral-area-restrita__nome-usuario-logado'>Seja bem vindo Gabriel</h5>
            <div className='topo-menu-lateral-area-restrita__container-btn-perfil-sair'>
                <img src={ imgUserPadrao } className='topo-menu-lateral-area-restrita__container-btn-perfil-sair__foto-usuario-logado' alt='Foto do usuário logado' />
                <button type='button' className='topo-menu-lateral-area-restrita__container-btn-perfil-sair__btn-expandir-menu'>
                    <CaretDownOutlined color='#000000' size={ 50 } />
                </button>
            </div>
            <nav className='topo-menu-lateral-area-restrita__sub-menu'>
                <ul className='topo-menu-lateral-area-restrita__sub-menu__lista'>
                    <li className='topo-menu-lateral-area-restrita__sub-menu__lista__item'>
                        <a href='#' className='topo-menu-lateral-area-restrita__sub-menu__lista__item__link'>Perfil</a>
                    </li>
                    <li className='topo-menu-lateral-area-restrita__sub-menu__lista__item'>
                        <a href='#' className='topo-menu-lateral-area-restrita__sub-menu__lista__item__link'>Sair</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}