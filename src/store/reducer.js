
const INITIAL_STATE = {
    materials: [],
    searchResults: []
}

export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ){
        case 'FETCH_DATA' :
            return { ...state, materials: action.payload }
        case 'SEARCH_RESULTS' :
        case 'CLEAR_RESULTS'  :
            return { ...state, searchResults: action.payload }
        default :
            return state
    } 
}
