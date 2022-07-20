export default (state = null, action) => {
    switch (action.type) {
        case "SEARCH_POKEMON":
            return action.payload;
        default:
            return state;
    }
}