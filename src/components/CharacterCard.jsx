import "react";
import PropTypes from "prop-types";
import '../styles/charactercard.css';
const CharacterCard = ({character}) => {

    const fixEmptyImage = (image, name) => {
        return image ? image : "https://placehold.co/600x400?text=" + name;
    }

    return (
        <>
            <img  class="card__image"
                src={fixEmptyImage(character.image, character.name)}
                alt={`Foto de ${character.name}`}
            />
             <div class="card__info">
                <h3 class="card__name">{character.name}</h3>
                <p class="card__meta">{character.species}</p>
             </div>
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