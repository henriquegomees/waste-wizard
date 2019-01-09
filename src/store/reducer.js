
const INITIAL_STATE = {
    materials: [],
    searchResults: [],
    favourites: []
}

export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ){
        case 'FETCH_DATA' :
            return { ...state, materials: action.payload }

        case 'FETCH_FAVOURITES' :
            return { ...state, favourites: action.favourites }

        case 'SEARCH_RESULTS' :
        case 'CLEAR_RESULTS'  :
            return { ...state, searchResults: action.payload }

        case 'ADD_FAVOURITE' :
            let favourites = state.favourites.slice()
            favourites.push(action.material)

            return { ...state, favourites }

        default :
            return state
    } 
}
