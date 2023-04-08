import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DivContainer, H1Title, SpanText } from "./Details";

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  const urlBASE = "http://localhost:3001";

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
        <div className="loading-container">
          <img className="loading-image" src="https://avowhcbwko.cloudimg.io/v7/https://empreender.nyc3.cdn.digitaloceanspaces.com/grupowhats/c8bdb1368e8adea71244dc6a8d9f4a96?w=400&org_if_sml=1" alt="Loading..." />
          <h3 className="loading-text">Cargando...</h3>
        </div>
      )}
    </DivContainer>
  );
}
