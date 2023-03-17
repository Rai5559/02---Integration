import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DivContainer } from "./Details";


export default function Detail(){

    const {detailId} =useParams();
    const [character, setCharacter] = useState({});

    const urlBASE="https://be-a-rym.up.railway.app/api";
    const key="5c7b65ba57e1.21d29bcea914b4f4d504";

    useEffect(() => {
        fetch(`${urlBASE}/character/${detailId}?key=${key}`)
        .then((response) => response.json())
        .then((char) => {
            if (char.name) {
            setCharacter(char);
            } else {
            window.alert("No hay personajes con ese ID");
            }
        })
        .catch((err) => {
            window.alert("No hay personajes con ese ID");
        });
        return setCharacter({});
    }, [detailId]);

    return (
       <DivContainer>
        {character.name ? (
        <>
          <h2>Name: {character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Specie: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin?.name}</p>
          <img src={character.image} alt="img" />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
       </DivContainer>
    )
    
}