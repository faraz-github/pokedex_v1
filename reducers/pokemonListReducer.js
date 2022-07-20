export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_ALL_POKEMON":
            return action.payload
        case "FETCH_NEXT_PAGE":
            return action.payload
        case "FETCH_PREV_PAGE":
            return action.payload
        default:
            return state;
    }
}