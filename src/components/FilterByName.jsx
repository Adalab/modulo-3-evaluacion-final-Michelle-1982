import "react";
import PropTypes from "prop-types";

const FilterByName = ({ name, updateName }) => {
    // Función manejadora
    // Debe estar siempre en el componente donde esté el elemento interactivo
    // En el cual pasamos la función a través del onChange
    // El elemento nos devuelve el evento, por el cual obtenemos el valor
    const handleChangeName = (ev) => {
        // Invocamos a la función que pasamos por props
        // Le pasamos el dato que queremos guardar en el estado correspondiente
        // Con esto, conseguimos enviar hacia arriba el dato, LIFTING
        updateName(ev.target.value)
    }

    return (
        <>
            <label htmlFor="name">Buscas por personaje:</label>
            <input name="name" id="name" value={name} onChange={handleChangeName}/>
        </>
    )
}

export default FilterByName;

FilterByName.proptypes = {
    name: PropTypes.string.isRequired,
    updateName: PropTypes.func.isRequired,
}