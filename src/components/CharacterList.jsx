import "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

const CharacterList= ({characters, name, house }) => {
    return (
        <ul>
            {characters
                // Filtramos para obtener los usuarios cuyos nombres incluyan la string que escriba el usuario en el buscador
                // Inicialmente será un string vacío, por lo que se mostrarán todos 
                .filter(character => character.name.toLowerCase().includes(name.toLowerCase()))
                // Filtramos para obtener los usuarios cuyo país sea el mismo que ha seleccionado el usuario en el select
                .filter(character => {
                    // Si no hay ningún país seleccionado, retornamos el usuario
                    if (house === "") {
                        return true;
                    } else {
                        return house === character.house;
                    }
                })
                
            
                .map(character => {
                    return (
                        <li key={character.id}>
                            {/* Usamos el componente Link para crear un enlace a la vista de detalle */}
                            <Link to={`/character/${character.id}`}>
                                <CharacterCard character={character} />
                            </Link>
                        </li>
                    )
            })}
        </ul>
    )
}

export default CharacterList;
CharacterList.proptypes = {
    characters: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
};