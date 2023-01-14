import Card from "../Card/Card";
import styles from "./Cards.module.css"

export default function Cards(props) {
  const { characters,onClose } = props;  
  return (
    <div className={styles.container}>
      {characters.map((character, index) => (
        <div key ={index}>
          <Card
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            id={character.id}
            onClose={()=>onClose(character.id)}
          />
        </div>
      ))}
    </div>
  );
}
