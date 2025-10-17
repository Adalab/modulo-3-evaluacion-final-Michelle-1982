import "react";
import PropTypes from "prop-types";
import '../styles/characterdetail.css';

const CharacterDetail = ({character}) => {

    const translateAlive = (data) => {
        return data ? "Vivo ♡" : "Muerto X";
    }

    const fixEmptyImage = (image, name) => {
        return image ? image : "https://placehold.co/600x400?text=" + name;
    }

    return (
        <>
        <main class="detail">
            <article class="detail__card">
            <div class="detail__thumb">
                <img src={fixEmptyImage(character.image, character.name)} alt={`Foto de ${character.name}`} class="detail__image" />
            </div>

            <div class="detail__info">
                <h2 class="detail__name">{character.name}</h2>
                <p><strong>Estatus:</strong> <span class="status status--alive">{translateAlive(character.alive)}</span></p>
                <p><strong>Especie:</strong> {character.species} <span class="icon">👤</span></p>
                <p><strong>Género:</strong> {character.gender}</p>
                <p><strong>Casa:</strong> {character.house}</p>
                <p class="detail__alt"><strong>Otros nombres:</strong> {character.alternate_names}</p>
            </div>
            </article>
        </main>
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