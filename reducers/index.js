import { combineReducers } from "redux";

import pokemonListReducer from "./pokemonListReducer";
import pokemonSearchReducer from "./pokemonSearchReducer";
import favoritesListReducer from "./favoritesListReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    pokemonList: pokemonListReducer,
    pokemonDetail: pokemonSearchReducer,
    favoritesList: favoritesListReducer,
    errorMessage: errorReducer
})