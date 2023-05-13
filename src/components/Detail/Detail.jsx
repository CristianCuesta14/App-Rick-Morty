import axios from "axios";
import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, []);

  return (
    <div className={style.detail}>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Especie: {character.species}</p>
      <p>Estado: {character.status}</p>
      <p>Gender: {character.gender}</p>
      <p>Origen: {character.origin?.name}</p>
    </div>
  );
};

export default Detail;
