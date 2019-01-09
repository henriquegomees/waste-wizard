
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
            let results    = state.searchResults.slice() 
            favourites.push(action.material)

            return { 
                ...state,
                favourites,
                searchResults: results.map(material =>
                    material.title === action.material.title 
                    ? { ...material, isFav: true } 
                    : material) 
            }

        case 'REMOVE_FAVOURITE' :
            let newArr = state.searchResults.slice() 

            return { 
                ...state,
                favourites: action.favourites,
                searchResults: newArr.map(material =>
                    material.title === action.material.title 
                    ? { ...material, isFav: false } 
                    : material) 
            }

        default :
            return state
    } 
}
