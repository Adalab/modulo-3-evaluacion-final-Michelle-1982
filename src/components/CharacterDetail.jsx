import "react";
import PropTypes from "prop-types";
import '../styles/characterdetail.css';

const CharacterDetail = ({character}) => {

    const translateAlive = (data) => {
        return data ? "Vivo ♡" : "Muerto ☠";
    }

    const fixEmptyImage = (image, name, house) => {
        if (image && image.trim() !== "") return image;
        const initials = (name || "??")
          .split(" ")
          .map((n) => n[0])
          .slice(0, 2)
          .join("")
          .toUpperCase();
        const colorMap = {
          Gryffindor: "#7b231f",
          Slytherin: "#0b6b3a",
          Ravenclaw: "#123a6b",
          Hufflepuff: "#b57f13",
        };
        const bg = colorMap[house] || "#444";
        const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='800'><rect width='100%' height='100%' fill='${bg}'/><text x='50%' y='50%' dy='.35em' font-family='Helvetica, Arial, sans-serif' font-size='160' fill='#fff' text-anchor='middle'>${initials}</text></svg>`;
        return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    
    };

    const translateSpecies = (species) => {
        if (species === "human") {
            return "🧑";
        } else if (species === "half-giant") {
            return "👹";
        } else if (species === "ghost") {
            return "👻";
        } else if (species === "goblin") {
            return "👺";
        } else if (species === "cat") {
            return "🐈";
        } else if (species === "owl") {
            return "🦉";
        } else {
            return "❓";
        } 
    }

    return (
        <>
        <main class="detail">
            <article class="detail__card">
             <div class="detail__thumb">
                <img
                  src={fixEmptyImage(character.image, character.name, character.house)}
                  alt={character.image ? `Foto de ${character.name}` : `Avatar de ${character.name}`}
                  class="detail__image"
                  loading="lazy"
                />
            </div>

            <div class="detail__info">
                <h2 class="detail__name">{character.name}</h2>
                <p><strong>Estatus:</strong> <span class="status status--alive">{translateAlive(character.alive)}</span></p>
                <p><strong>Especie:</strong> {character.species} <span class="icon">{translateSpecies(character.species)}</span></p>
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