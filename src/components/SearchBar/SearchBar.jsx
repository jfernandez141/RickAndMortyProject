import { useState } from "react";
import styles from "./SearchBar.module.css"
export default function SearchBar(props) {

  const [searchBar, setSearchBar] = useState()

  function searchChange(data){
    setSearchBar(data.target.value)
  }
  function click(){
    props.onSearch(searchBar)
    setSearchBar("")
  }
  function random(){
    let number = Math.floor(Math.random() * 827)
    props.onSearch(number)
  }

  return (
    <div className={styles.searchBar}>
      <input className={styles.input} onChange={searchChange} type="search" placeholder="Character Id" value={searchBar}/>
      <button className={styles.btn} onClick={click}>Agregar</button>
      <button className={styles.btn} onClick={random}>Random</button>
    </div>
  );
}
