import style from "./Form.module.css";
import validation from "../Validation/Validation.js";
import { useState } from "react";

const Form = ({login}) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });


  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name] : event.target.value
      })
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <img
        className={style.imgForm}
        src="https://i.pinimg.com/originals/be/a1/75/bea1752f064a9245431e8ba8025c26a7.png"
        alt=""
      />

      <label htmlFor="email" className={style.emailForm}>
        Email:
      </label>
      <input
        type="text"
        name="email"
        value={userData.email}
        onChange={handleChange}
        className={style.inputsForm}
        placeholder="Escribe tu Email"
      />
      {errors.email && <small className={style.small}>{errors.email}</small>}

      <label htmlFor="password" className={style.passForm}>
        Password
      </label>
      <input
        onChange={handleChange}
        handleChange={userData.password}
        value={userData.password}
        name="password"
        placeholder="Escribe tu password"
        type="password"
      />
      {errors.password && <small className={style.small}>{errors.password}</small>}

      <button className={style.btnForm} type="submit">
        Login
      </button>
    </form>
  );
};
export default Form;
