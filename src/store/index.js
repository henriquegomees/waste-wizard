
import { combineReducers } from 'redux'

import wasteReducer from './reducer'

export default combineReducers({
    waste: wasteReducer
})
