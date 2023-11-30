import './style.css';
import spinner from '../../assets/images/spinner.gif';

export default function Loader(props) {

    console.log(props.ativo);

    return (
        <div className={ 'loader' + ' ' + (props.ativo ? 'loader-ativo' : 'loader-inativo') }>
            <div className='loader__conteudo'>
                <img src={ spinner } className='loader__conteudo__spinner' alt='Spinner de load do projeto Estoque Plus' />
                <p>Carregando, aguarde...</p>
            </div>
        </div>
    );
}