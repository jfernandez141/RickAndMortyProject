import { useState } from "react";
import styles from "./Form.module.css";
import { validate } from "./validation";

export default function Form(props) {
  const [userData, setUserData] = useState({ username: "", password: "" });

  const [error, setError] = useState({ username: "", password: "" });

  function handleSubmite(userData) {
    props.login(userData);
  }

  function handleInputChange(event) {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({
      ...userData,
      [property]: value,
    });
    setError(
      validate({
        ...userData,
        [property]: value,
      })
    );
  }

  return (
    <div className={styles.divform}>
      <form className={styles.form}>
        <label htmlFor="">Email: </label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />
        <p>{error.email}</p>
        <br />

        <label htmlFor="">Password: </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <p>{error.password}</p>
        <br />

        <button onClick={()=>handleSubmite(userData)}>LOGIN</button>
      </form>
    </div>
  );
}
