import Card from "../Card/Card";
import style from "./Cards.module.css";


const Cards = ({ characters, onClose }) => {
  return (
    <div className={style.containerCards}>
      {characters.map(
        ({ id, name, status, species, gender, origin, image }) => {
          return (
            <Card
              key={id}
              id={id}
              image={image}
              name={name}
              gender={gender}
              species={species}
              status={status}
              origin={origin.name}
              onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
};

export default Cards;
