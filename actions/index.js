import pokeapi from "../axios/pokeapi";

//================================================================================= All Pokemons - Initial Page
export function fetchAllPokemon() {
    // Returning function for redux thunk
    return async function (dispatch) {
        try {
            const response = await pokeapi.get("/pokemon");
            dispatch({
                type: "FETCH_ALL_POKEMON",
                payload: response
            })
        } catch (error) {
            // console.log(error.message);
            dispatch({
                type: "ERROR_MESSAGE",
                payload: error.message
            })
        }
    }
}

//================================================================================= All Pokemons - Next Page
export function fetchNextPage(nextPageURL) {
    return async function (dispatch) {
        const response = await pokeapi.get(nextPageURL);
        dispatch({
            type: "FETCH_NEXT_PAGE",
            payload: response
        })
    }
}

//================================================================================= All Pokemons - Previous Page
export function fetchPrevPage(prevPageURL) {
    return async function (dispatch) {
        const response = await pokeapi.get(prevPageURL);
        dispatch({
            type: "FETCH_PREV_PAGE",
            payload: response
        })
    }
}

//================================================================================= Search Specific Pokemon 
export function searchPokemon(pokemonId) {
    return async function (dispatch) {
        try {
            const response = await pokeapi.get(`/pokemon/${pokemonId}`);
            dispatch({
                type: "SEARCH_POKEMON",
                payload: response.data
            })
            dispatch({
                type: "ERROR_MESSAGE",
                payload: "No Error"
            })
        } catch (error) {
            dispatch({
                type: "ERROR_MESSAGE",
                payload: error.message
            })
        }

    }
}

//================================================================================= Select A Pokemon
export function selectedPokemon(pokemonValue) {
    return {
        type: "SELECTED_POKEMON",
        payload: pokemonValue
    }
}

//================================================================================= DeSelect A Pokemon
export function deselectedPokemon(pokemonValue) {
    return {
        type: "DESELECTED_POKEMON",
        payload: pokemonValue
    }
}