import "react";
import { useParams, Link } from "react-router-dom";
import ls from "../services/localstorage";
import CharacterDetail from "../components/CharacterDetail";

const DetailPage = () => {
    // Obtenemos el id de la url
    // Éste parámetro de llamará igual que al crear la ruta
    // /user/:id
    const { id } = useParams();
    // Obtenemos los usuarios del localStorage
    const characters = ls.get("characters", []);
    // Buscamos el usuario que tenga el ID de la url
    const character = characters.find(character => character.id === id);

    return (
        <>
            {/* Si existe el usuario en el localStorage y el ID es coincidente, se mostrará */}
            {character ? (
                <>
                    <CharacterDetail character ={character} />
                    <Link to="/">Volver</Link>
                </>
            ) : (
                <>
                    <p>Usuario no encontrado</p>
                    <Link to="/">Volver</Link>
                </>

            )}
        </>
    )
}

export default DetailPage;
    














