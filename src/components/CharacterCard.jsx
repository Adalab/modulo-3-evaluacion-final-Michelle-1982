import React from"react";
import PropTypes from "prop-types";
import '../styles/charactercard.css';

const CharacterCard = ({character}) => {

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

    return (
         <>
      <img
        className="card__image"
        src={fixEmptyImage(character.image, character.name, character.house)}
        alt={character.image ? `Foto de ${character.name}` : `Avatar de ${character.name}`}
        loading="lazy"
      />
      <div className="card__info">
        <h3 className="card__name">{character.name}</h3>
        <p className="card__meta">{character.species}</p>
      </div>
    </>
  );
};

export default CharacterCard;

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
