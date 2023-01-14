import styles from "./Detail.module.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function About() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({
    name: "",
    status: "",
    species: "",
    gender: "",
    origin: "",
    img: "",
  });

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter({
            name: char.name,
            status: char.status,
            species: char.species,
            gender: char.gender,
            origin: char.origin.name,
            img: char.image,
          });
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
    <div className={styles.divP}>
      <div className={styles.divInfo}>
        <h2 className={styles.name}>NOMBRE: {character.name}</h2>
        <ul className={styles.list}>
          <li>STATUS: {character.status}</li>
          <li>ESPECIE: {character.species}</li>
          <li>GENERO: {character.gender}</li>
          <li>ORIGIN: {character.origin}</li>
        </ul>
      </div>
      <div className={styles.divImage}>
        <img className={styles.img} src={character.img} />
      </div>
    </div>
  );
}
