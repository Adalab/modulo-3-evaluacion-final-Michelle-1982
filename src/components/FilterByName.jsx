import "react";
import PropTypes from "prop-types";
import ls from "../services/localStorage";
import '../styles/filterbyname.css';
const FilterByName = ({ name, updateName }) => {
    const handleChangeName = (ev) => {
        updateName(ev.target.value)
        ls.set("filterByName", ev.target.value);
    }

    return (
        <>
            <label class="filters__label" htmlFor="name">Buscas por personaje:</label>
            <input class="filters__input" name="name" id="name" value={name} onChange={handleChangeName}/>
        </>
    )
}

export default FilterByName;

FilterByName.proptypes = {
    name: PropTypes.string.isRequired,
    updateName: PropTypes.func.isRequired,
}