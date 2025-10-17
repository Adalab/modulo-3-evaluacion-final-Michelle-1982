import "react";
import { useParams, Link } from "react-router-dom";
import ls from "../services/localstorage";
import CharacterDetail from "../components/CharacterDetail";

const DetailPage = () => {
    const { id } = useParams();
    
    const characters = ls.get("characters", []);
    const character = characters.find(character => character.id === id);
   
    return (
        <>
            {character ? (
                <>
                    <CharacterDetail character ={character} />
                    <Link to="/">Volver</Link>
                </>
            ) : (
                <>
                    <p>Personaje no encontrado</p>
                    <Link to="/">Volver</Link>
                </>

            )}
        </>
    )
}

export default DetailPage;
    














