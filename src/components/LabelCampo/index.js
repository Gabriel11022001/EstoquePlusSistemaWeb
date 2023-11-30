import './style.css';

export default function LabelCampo(props) {

    return (
        <label className='label-campo'>
            <span className='label-campo__nome-campo'>{ props.campo }</span>
            { props.obrigatorio ? <span className='label-campo__obrigatorio'>*</span> : false }
        </label>
    );
}