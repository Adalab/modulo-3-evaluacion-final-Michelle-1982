import "react";
import PropTypes from "prop-types";

const CharacterDetail = ({character}) => {

    const translateAlive = (data) => {
        return data ? "Vivo" : "Muerto";
    }

    return (
        <>
            <img
                src={character.image}
                alt={`Foto de ${character.name}`}
            />
            <p>{character.name}</p>
            <p>Estatus: {translateAlive(character.alive)}</p>
            <p>Especie: {character.species}</p>
            <p>Género: {character.gender}</p>
            <p>Casa: {character.house}</p>
            <p>Otros nombres: {character.alternate_names}</p>
        </>
    )
}

export default CharacterDetail;

CharacterDetail.proptypes = {
    character: PropTypes.shape({
        name: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        alive: PropTypes.bool.isRequired,
        gender: PropTypes.string,
        house: PropTypes.string,
    }).isRequired
}