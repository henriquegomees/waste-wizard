
import axios from 'axios'

const fetchData = async () => {
    const request = await axios.get(process.env.REACT_APP_API_URL)
    console.log(request.data)

    return dispatch => dispatch({
        type: 'FETCH_DATA',
        payload: request.data
    })
}

export {
    fetchData
}
