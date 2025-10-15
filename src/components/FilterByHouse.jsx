import "react";
import PropTypes from "prop-types";

const FilterByHouse = ({house, updateHouse, houses}) => {
    // Función manejadora
    // Debe estar siempre en el componente donde esté el elemento interactivo
    // En el cual pasamos la función a través del onChange
    // El elemento nos devuelve el evento, por el cual obtenemos el valor
    const handleChangeHouse = (ev) => {
        // Invocamos a la función que pasamos por props
        // Le pasamos el dato que queremos guardar en el estado correspondiente
        // Con esto, conseguimos enviar hacia arriba el dato, LIFTING
        updateHouse(ev.target.value);
    }

    return (
         <label htmlFor="House">
                Selecciona la casa:
                <select name="house" id="house" value={house} onChange={handleChangeHouse}>
                    <option value="">Todos</option>
                    {houses.map((item, index) => {
                        // Mostramos una opción por cada uno de los países
                        return (
                            <option key={index} value={item}>{item}</option>
                        )
                    })}
                </select>
            </label>
    )
}

export default FilterByHouse;

FilterByHouse.proptypes = {
    house: PropTypes.string.isRequired,
    updateHouse: PropTypes.func.isRequired,
    houses: PropTypes.array.isRequired
}