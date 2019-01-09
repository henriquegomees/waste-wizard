
import axios from 'axios'

const fetchData = async () => {
    const request = await axios.get(process.env.REACT_APP_API_URL)

    return dispatch => dispatch({
        type: 'FETCH_DATA',
        payload: request.data
    })
}

const fetchFavourites = async () => {
    const favourites = await JSON.parse(localStorage.getItem('favouritesMaterials')) || []
    return dispatch => dispatch({
        type: 'FETCH_FAVOURITES',
        favourites
    })
}

const searchResults = async results => {
    const favourites = await JSON.parse(localStorage.getItem('favouritesMaterials')) || []
    let isFav, infos
    let materials = []
    results.map( (material, index) => {
        favourites.find( fav => fav.title === material.title ) ? isFav = true : isFav = false

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

const addFavourite = async material => {
    const favourites = await JSON.parse(localStorage.getItem('favouritesMaterials')) || []
    favourites.push(material)
    await localStorage.setItem('favouritesMaterials', JSON.stringify(favourites))

    return dispatch => dispatch({
        type: 'ADD_FAVOURITE',
        material
    })
}

const removeFavourite = async ( material, index ) => {
    const favourites = await JSON.parse(localStorage.getItem('favouritesMaterials'))
    favourites.splice( index, 1 )

    await localStorage.setItem('favouritesMaterials', JSON.stringify(favourites))

    return dispatch => dispatch({
        type: 'REMOVE_FAVOURITE', 
        favourites,
        material
    })
}

export {
    fetchData,
    fetchFavourites,
    searchResults,
    clearResults,
    addFavourite,
    removeFavourite
}
