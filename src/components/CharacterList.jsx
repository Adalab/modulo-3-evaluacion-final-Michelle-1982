import "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters, name, house }) => {
    const filteredByName = characters.filter((character) =>
        character.name.toLowerCase().includes(name.toLowerCase())
    );

    const filtered = filteredByName.filter((character) =>
        house === "" ? true : house === character.house
    );

    if (filtered.length === 0) {
        return <p>No hay ningún personaje que coincida con la palabra "{name}"</p>;
    }

    return (
        <ul>
            {filtered.map((character) => (
                <li key={character.id}>
                    <Link to={`/character/${character.id}`}>
                        <CharacterCard character={character} />
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default CharacterList;
CharacterList.proptypes = {
    characters: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
};