import "react";
import PropTypes from "prop-types";

const CharacterCard = ({character}) => {
    return (
        <>
            <img
                src={character.image}
                alt={`Foto de ${character.name}`}
            />
            <p>{character.name}</p>
            <p>{character.species}</p>
        </>
    )
}

export default CharacterCard;

CharacterCard.proptypes = {
    character: PropTypes.shape({
        name: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired
}