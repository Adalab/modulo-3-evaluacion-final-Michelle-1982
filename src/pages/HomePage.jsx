import { useState, useEffect } from "react";
import ls from "../services/localStorage";
import getCharacters from "../services/api";
import CharacterList from '../components/CharacterList';
import Filters from "../components/Filters";

const HomePage = () => {
    
    // Estados:
    // Para guardar el nombre escrito por el usuario en el input
    const [name, setName ] = useState("");
    // Para guardar el país seleccionado por el usuario en el select
    const [house, setHouse] = useState("");
    // Para guardar las regiones seleccionadas por el usuario en los checkboxes
    // Éste será un array. Ej: ["Galicia", "Andalucía"]
    
    // Para guardar los usuarios que nos retorna el API
    // Lo inicializamos con los datos guardados en el localStorage si los hay
    const [characters, setCharacters] = useState(ls.get("characters", []));

    // Como no tiene nada en el array de dependencias, solo se inicializará tras el primer renderizado
    // Es decir, tras recargar la página y se muestren los componentes
    useEffect(() => {
        // Si el array de usuarios esta vacío, llámamos a la API
        // Estará vacío si no están previamente guardados en el localStorage
        if (characters.length === 0) {
            getCharacters().then(data => {
                setCharacters(data);
                // Tras obtener y guardar los datos en el estado, los guardamos en el localStorage
                ls.set("characters", data);
            })
        }
    }, [characters.length]);


    // Funciones:
    // Función que recibe el valor que guardaremos en el estado
    // Este valor tiene que estar "limpio", para no enviar el evento entero a través de los componentes
    // Esta función estará en el mismo componente donde esté el estado
    // Esta función la pasaremos como prop hasta el componente que tenga la función manejadora correspondiente
    // La invocaremos en ella
    const updateName = (value) => {
        setName(value);
    }

    const updateHouse = (value) => {
        setHouse(value);
    }
    const getHouses = () => {
        // Creamos un nuevo array con los países que tengan los usuarios
        const houses = characters.map(character=> {
            return character.house;
        });
        // Como estos pueden estar repetidos, creamos un Set el cual elimina los duplicados
        const uniqueHouses = new Set(houses);
        // Hacemos una copia de este Set, para obtener un dato de tipo array
        const uniqueArray = [...uniqueHouses];
        // Lo retornamos para usar el array
        return uniqueArray;

    }

    return (
        <>
        <Filters
                updateName={updateName}
                updateHouse={updateHouse}
                name={name}
                house={house}
                houses={getHouses()}
            
            />
           <section>
                <h2>Personajes Harry Potter</h2>
                <CharacterList
                    characters={characters}
                    name={name}
                    house={house}
                    
                />
            </section>
        </>
    )

}




export default HomePage;
