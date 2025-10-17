import { useState, useEffect } from "react";
import ls from "../services/localStorage";
import getCharacters from "../services/api";
import CharacterList from '../components/CharacterList';
import Filters from "../components/Filters";
import Logo from "../components/Logo";
import '../styles/homepage.css';

const HomePage = () => {
    const [name, setName ] = useState(ls.get("filterByName", ""));
    const [house, setHouse] = useState("");
    const [characters, setCharacters] = useState(ls.get("characters", [])); 

    useEffect(() => {
        
        if (characters.length === 0) {
            getCharacters().then(data => {
                setCharacters(data);
                ls.set("characters", data);
            })
        }
    }, [characters.length]);

    const updateName = (value) => {
        setName(value);
    }

    const updateHouse = (value) => {
        setHouse(value);
    }
    const getHouses = () => {
        const houses = characters.map(character=> {
            return character.house;
        });
        
        const uniqueHouses = new Set(houses);
        const uniqueArray = [...uniqueHouses];
        return uniqueArray;

    }

    return (
        <>
        <section class="page">
        <Logo />
        <Filters
                updateName={updateName}
                updateHouse={updateHouse}
                name={name}
                house={house}
                houses={getHouses()}
            
            />
            <h2>Personajes Harry Potter</h2>
            <section class="cards">
                <CharacterList
                    characters={characters}
                    name={name}
                    house={house}
                    
                />
            </section>
           


        </section>
        </>
    )

}




export default HomePage;
