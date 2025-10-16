import "react";
import PropTypes from "prop-types";
import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
// 4. css si lo hay

const Filters = ({ updateName, updateHouse, name, house, houses }) => {

    const handleSubmit = (ev) => {
        ev.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <section>

                <FilterByName
                    name={name}
                    updateName={updateName}
                />

                <br/>

                <FilterByHouse
                    house={house}
                    updateHouse={updateHouse}
                    houses={houses}
                />
                
            </section>

        </form>
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