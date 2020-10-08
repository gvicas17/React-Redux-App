

import axios from 'axios'

export const fetchQuotes = (url) => (dispatch) => {
    dispatch({type: FETCH_QUOTES})
    axios
    .get(url)
    .then((res) => {
        dispatch({type: FETCH_QUOTES_SUCCESS, payload: res.data})
    })
    .catch((err)=> console.log(err))
}