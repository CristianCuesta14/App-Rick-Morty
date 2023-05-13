import { createStore, applyMiddleware, compose } from "redux";
import  reducer  from "./reducer";
import  thunkMiddleware  from "redux-thunk";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose; // para conectar la app con la extension de redux devtools del navegador

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
  //para poder hacer peticiones a una Api/servidor
);


export default store;
