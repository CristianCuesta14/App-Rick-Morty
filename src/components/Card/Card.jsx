import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({
  onClose,
  name,
  status,
  species,
  gender,
  origin,
  image,
  id,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav
      ? removeFav(id)
      : addFav({ onClose, name, id, status, species, gender, origin, image });
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.Card}>
      {<button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"} </button>}

      <button
        onClick={() => {
          onClose(id);
        }}
        className={style.close}
      >
        X
      </button>
      <img src={image} alt="imagen de Rick & Morty" />
      <h2 className={style.textCard}>Id: {id}</h2>
      <Link to={`/detail/${id}`}>
        <h2 className={style.textCard}>Name: {name}</h2>
      </Link>
      <h2 className={style.textCard}>Gender: {gender}</h2>
      <h2 className={style.textCard}>Status: {status}</h2>
      <h2 className={style.textCard}>Species: {species}</h2>
      <h2 className={style.textCard}>Origin: {origin}</h2>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
