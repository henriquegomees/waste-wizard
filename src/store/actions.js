
import axios from 'axios'

const fetchData = async () => {
    const request = await axios.get(process.env.REACT_APP_API_URL)

    return dispatch => dispatch({
        type: 'FETCH_DATA',
        payload: request.data
    })
}

const searchResults = async results => {
    const favourites = await JSON.parse(localStorage.getItem('favouritesMaterials')) || []
    let isFav, infos
    let materials = []
    results.map( (material, index) => {
        favourites.find( fav => fav.id === material.id ) ? isFav = true : isFav = false

        infos = {
            id: material.id || index,
            title: material.title,
            description: material.body,
            isFav
        }
        return materials.push(infos)
    })

    return dispatch => dispatch({
        type: 'SEARCH_RESULTS', 
        payload: materials
    })
}

const clearResults = () => {
    return dispatch => dispatch({
        type: 'CLEAR_RESULTS',
        payload: []
    })
}

const addFavourite = material => {
    return dispatch => dispatch({
        type: 'ADD_FAVOURITE',
        material
    })
}

export {
    fetchData,
    searchResults,
    clearResults,
    addFavourite
}
