import { useState } from "react";
import style from "./Form.module.css";
import { validate } from "./validation";

export default function Form(props) {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const [error, setError] = useState({ email: "", password: "" });

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
    <div className={style.divform}>
      <div className={style.title}>
        <h1 className={style.tittle}>WELCOME TO RICK AND MORTY APP</h1>
        <h3>This app was created by Jhamil Fernandez</h3>

        <a href="https://www.linkedin.com/in/jhamil-fernandez/">
          <button className={style.btn}>Linkedin</button>
        </a>
        <a href="https://github.com/jfernandez141">
          <button className={style.btn}>GitHub</button>
        </a>
      </div>
      <form className={style.form}>
        <label htmlFor="">Email: </label>
        <input
          placeholder="ejemplo@gmail.com"
          type="text"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />
        <p>ejemplo@gmail.com</p>
        <p>{error.email}</p>

        <label htmlFor="">Password: </label>
        <input
          placeholder="1password"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <p>1password</p>
        <p>{error.password}</p>
        <div>
          <button className={style.btn} onClick={() => handleSubmite(userData)}>
            Login
          </button>
          <button className={style.btn} onClick={() => handleSubmite("guest")}>
            Guest Login
          </button>
        </div>
      </form>
    </div>
  );
}
