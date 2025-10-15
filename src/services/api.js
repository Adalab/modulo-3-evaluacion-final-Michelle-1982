const getCharacters = () => {
    return fetch("https://hp-api.onrender.com/api/characters")
        .then((response) => response.json())
        .then((data) => {
            console.log('@obtengo datos del api:', data)
            const cleanData = data.map((character) => {
                return {
                    id: character.id,
                    name: character.name.toLowerCase(),
                    image: character.image,
                    species: character.species,
                    house: character.house,
                    gender: character.gender,
                    alive: character.alive,
                    alternate_names: character.alternate_names,

                };
            });
            return cleanData;
        });
};

export default getCharacters;