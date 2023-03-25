import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DivContainer, H1Title, SpanText } from "./Details";

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  const urlBASE = "http://localhost:3001/rickandmorty";

  useEffect(() => {
    fetch(`${urlBASE}/detail/${detailId}`)
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
          <H1Title>
            Name: <SpanText>{character.name}</SpanText>
          </H1Title>
          <h3>
            Status: <SpanText>{character.status}</SpanText>
          </h3>
          <h3>
            Specie: <SpanText>{character.species}</SpanText>
          </h3>
          <h3>
            Gender: <SpanText>{character.gender}</SpanText>
          </h3>
          <h3>
            Origin: <SpanText>{character.origin?.name}</SpanText>
          </h3>
          <img src={character.image} alt="img" />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </DivContainer>
  );
}
