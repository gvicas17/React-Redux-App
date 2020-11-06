
import axios from 'axios'


export const FETCH_FOOD_START = 'FETCH_FOOD_START'
export const FETCH_FOOD_SUCCESS = 'FETCH_FOOD_SUCCESS'
export const FETCH_FOOD_FAILURE = 'FETCH_FOOD_FAILURE'

export const getFood = () => {
    return(dispatch) => {
        dispatch({type: FETCH_FOOD_START})
    
    axios.get('https://foodish-api.herokuapp.com/api')
    .then(res => {
        dispatch({ type: FETCH_FOOD_SUCCESS, payload: res.data.image})
    })
    .catch(err => {
        console.log(err.message)
        dispatch({type: FETCH_FOOD_FAILURE, payload: err.message})
    })
        
    }
}

