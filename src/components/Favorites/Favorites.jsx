import styles from "./favorites.module.css";
import { connect } from "react-redux";
import Card from "../Card/Card";

export function Favorites(props) {
    return(
        <div className={styles.container}>
        {props.myFavorites.map((character, index) => (
          <div key ={index}>
            <Card
              name={character.name}
              species={character.species}
              gender={character.gender}
              image={character.image}
              id={character.id}
              
            />
          </div>
        ))}
      </div>

    )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
