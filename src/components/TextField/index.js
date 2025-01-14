import './TextField.css';

const TextField = (props) => {
    const placeholderModificada = `${props.placeholder}...`;

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className="text-field">
            <label> 
                {props.label} 
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default TextField;