import './style.css';

export default function Botao(props) {

    return (
        <button type={ props.tipo } className={
            'botao' + ' ' + props.tipoBotao
        }
        onClick={ props.executarOperacao }>{ props.texto }</button>
    );
}