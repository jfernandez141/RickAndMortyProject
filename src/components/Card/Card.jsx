import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { connect, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export function Card(props) {
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorite(props.id);
    } else {
      setIsFav(true);
      props.addFavorite(props);
    }
  }
  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  return (
    <div className={styles.card}>
      {isFav ? (
        <button className={styles.botonC} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={styles.botonC} onClick={handleFavorite}>🤍</button>
      )}

      {props.onClose && (
        <button className={styles.boton} onClick={props.onClose}>
          X
        </button>
      )}

      <Link to={`/detail/${props.id}`}>
        <h2 className={styles.name}>{props.name}</h2>
      </Link>
      <img className={styles.img} src={props.image} alt="" />
      <h2>Especie: {props.species}</h2>
      <h2>Genero: {props.gender}</h2>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (char) => {
      dispatch(addFavorite(char));
    },
    deleteFavorite: (id) => {
      dispatch(deleteFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
