import "react";
import PropTypes from "prop-types";
import '../styles/filterbyhouse.css';

const FilterByHouse = ({house, updateHouse, houses}) => {
    const handleChangeHouse = (ev) => {
        updateHouse(ev.target.value);
    }

    return (
        <label class="filters__label" htmlFor="House">
                Selecciona la casa:
                <select class= "filters__select"  name="house" id="house" value={house} onChange={handleChangeHouse}>
                    <option value="">Todos</option>
                    {houses.map((item, index) => {
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