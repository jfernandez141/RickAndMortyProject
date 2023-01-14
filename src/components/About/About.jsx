import styles from "./About.module.css";
import Card from "../Card/Card";

export default function About() {
  console.log("hola");
  return (
    
    <div className={styles.div}>
      <h2 className={styles.jf}>Aplicacion creada por: </h2>
      <Card 
        name="Jhamil Fernandez"
        species="Human?"
        gender="Male"
        image="https://i.pinimg.com/280x280_RS/cd/f6/e8/cdf6e86b69cca8bb613f7704af125861.jpg"
        id="1995"
        onClose={() => alert("No puedes eliminar al creador <3")}
      />
    </div>
  );
}
