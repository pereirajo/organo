import './Dropdown.css';

const Dropdown = (props) => {
    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select
                onChange={event => props.aoAlterado(event.target.value)}
                required={props.required}
                value={props.valor}
            >
                <option disabled value="">Selecione...</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Dropdown;