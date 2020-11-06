import { FETCH_FOOD_START, FETCH_FOOD_SUCCESS, FETCH_FOOD_FAILURE } from "../actions/actions"

export const initialState = {
    isLoading: false,
    data: [],
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_FOOD_START:
        return{
            ...state,
            isLoading: true,
            error: ''
        }
        case FETCH_FOOD_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data: [action.payload]
            }
        case FETCH_FOOD_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload 
            }
        default:
            return state
    }
}