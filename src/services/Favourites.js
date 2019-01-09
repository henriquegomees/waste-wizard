
const item = 'favouritesMaterials'

const get = async () => await JSON.parse( localStorage.getItem( item ) ) || []

const set = async favourites => await localStorage.setItem( item, JSON.stringify( favourites ) )

export default {
    get, 
    set
}
