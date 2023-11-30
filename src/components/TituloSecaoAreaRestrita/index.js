import './style.css';

export default function TituloSecaoAreaRestrita(props) {

    return (
        <div className='titulo-secao-area-restrita'>
            <h1 className='titulo-secao-area-restrita__texto-titulo'>{ props.titulo }</h1>
            <nav className='titulo-secao-area-restrita__nav'>
                <ul className='titulo-secao-area-restrita__nav__lista'>
                    { props.linksPaginas.map((linkPagina, indice) => {
                        return <li key={ linkPagina.link } className='titulo-secao-area-restrita__nav__lista__item'>
                            <a href={ linkPagina.link } className='titulo-secao-area-restrita__nav__lista__item__link'>{ linkPagina.nomeLink }</a>
                            { (indice < (props.linksPaginas.length - 1)) ? <span className='titulo-secao-area-restrita__nav__lista__item__separador'>/</span> : false }
                        </li>
                    }) }
                </ul>
            </nav>
        </div>
    );
}