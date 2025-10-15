import "react";
import PropTypes from "prop-types";
import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
// 4. css si lo hay

const Filters = ({ updateName, updateHouse, name, house, houses }) => {
    return (
        <section>
            <h2>Filtros</h2>

            <FilterByName
                name={name}
                updateName={updateName}
            />

            <FilterByHouse
                house={house}
                updateHouse={updateHouse}
                houses={houses}
            />
               
        </section>
    )
}

export default Filters;

Filters.proptypes = {
    updateName: PropTypes.func.isRequired,
    updateHouse: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
    houses: PropTypes.array.isRequired,
    
}