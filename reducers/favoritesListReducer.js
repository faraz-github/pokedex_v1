export default (state = [], action) => {
    switch (action.type) {
        case "SELECTED_POKEMON":
            return [...state, action.payload]
        case "DESELECTED_POKEMON":
            const newArray = [];
            state.map((item) => {
                if (item.id !== action.payload.id) {
                    newArray.push(item)
                }
            })
            return newArray;
        default:
            return state;
    }
}